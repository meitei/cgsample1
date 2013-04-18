class ToukeisController < ApplicationController

  SumUnts = Struct.new(:keyCd, :keyLabel, :joins)

  # GET /toukeis
  # GET /toukeiss.json
  def index
    respond_to do |format|
      format.html # index.html.erb
      #format.json { render json: @responce }
    end
  end

  # GET /toukeis/search
  # GET /toukeis/search.json
  def search
    logger.debug(params)

    targetSpnFrom = Date.strptime(params[:targetSpnFrom], "%Y/%m/%d") if is_date?(params[:targetSpnFrom])
    targetSpnTo = Date.strptime(params[:targetSpnTo], "%Y/%m/%d") if is_date?(params[:targetSpnTo])
    today = Date.today

    conditions = KonyuRireki.where("1 = ?", 1)
    conditions = conditions.where("\"kanryoDt\" >= ?", targetSpnFrom) if targetSpnFrom
    conditions = conditions.where("\"kanryoDt\" <= ?", targetSpnTo) if targetSpnTo
    logger.debug(conditions)

    # get db adapter
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']

    if params[:outCond] == "1" then
      # 月別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y%m', \"kanryoDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"kanryoDt\",'%Y%m')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"kanryoDt\", 'YYYYMM')"
      end
    elsif params[:outCond] == "2" then
      # 年度別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y', \"kanryoDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"kanryoDt\",'%Y')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"kanryoDt\", 'YYYY')"
      end
    else
      # 総合計
      sumCndKey = "'dummy'"
    end

    # Pending...
    sumUnts = {
      1 => SumUnts.new(
        "\"uketsukeSesakuTantoCd\"",
        # "users.myoji||' '||users.name",
        # "concat(users.myoji,' ',users.name)",
        str_sql_concat("users.myoji","' '","users.name"),
        "left outer join users on users.\"shainCd\" = konyu_rirekis.\"uketsukeSesakuTantoCd\"")
    }
    sumUnts.default = sumUnts[1]
    sumUnt = sumUnts[params[:sumUnt].to_i];

    # sumUnts = {
    #   1 => "uketsukeSesakuTantoCd",
    #   2 => "byoinCd",
    #   3 => "shohinNm",
    #   4 => "shubetsuCd",
    #   5 => "mitsumoriKomokuCd"
    # }

    @konyu_rirekis = conditions.find(
      :all,
      :select => "#{sumCndKey} \"sumCndKey\", #{sumUnt.keyCd} \"sumUntKey\", #{sumUnt.keyLabel} \"sumUnt\", sum(kin) kingaku, count(*) daisu ",
      :joins => sumUnt.joins,
      :group  => "\"sumCndKey\", \"sumUntKey\", \"sumUnt\" ",
      :order  => "\"sumCndKey\", \"sumUntKey\" ASC")

    # 検索結果をSessionに保存
    session[:konyu_rirekis] = @konyu_rirekis.clone

    # 集計単位のリストを作成する
    cndKeys = []
    @konyu_rirekis.each {|row|
      cndKeys << row["sumCndKey"] if not row["sumCndKey"].blank?
    }
    logger.debug(cndKeys)
    cndKeys = cndKeys.uniq.sort if cndKeys.size > 1
    logger.debug(cndKeys)

    has_prev = false
    has_next = false
    outCondYear = outCondMonth = ""

    if not cndKeys.empty? and params[:outCond] != "3" then
      outCondYear = cndKeys.first[0..3]
      outCondMonth = cndKeys.first[4..5] if cndKeys.first.length == 6
    end

    # 次のページが存在するか？
    has_next = true if cndKeys.size > 1
    # logger.debug("outCondYear => #{outCondYear}, outCondMonth => #{outCondMonth}")

    # 表示中の年月以外は結果から除外する
    @konyu_rirekis.delete_if {|item|
      item["sumCndKey"] != outCondYear+outCondMonth and item["sumCndKey"] != "dummy"
    }

    records = @konyu_rirekis.size
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;
    @konyu_rirekis = @konyu_rirekis[start, limit]

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @konyu_rirekis,
      cond: {
        outCondYear: outCondYear,
        outCondMonth: outCondMonth,
        has_prev: has_prev,
        has_next: has_next
      }
    }

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /toukeis/move_page
  # GET /toukeis/move_page.json
  def move_page

    logger.debug("move_page: " + params.to_yaml)

    outCondYear = params[:outCondYear]
    outCondMonth = params[:outCondMonth]
    direction = params[:direction]

    # 検索結果をSessionから取得
    @konyu_rirekis = session[:konyu_rirekis].clone

    # 集計単位のリストを作成する
    cndKeys = []
    @konyu_rirekis.each {|row|
      cndKeys << row["sumCndKey"] if not row["sumCndKey"].blank?
    }
    cndKeys = cndKeys.uniq.sort if cndKeys.size > 1

    has_prev = false
    has_next = false
    if not cndKeys.empty? then

      outCondKey = outCondYear
      outCondKey = outCondKey + outCondMonth if outCondMonth

      cndPos = cndKeys.index(outCondKey)
      if direction == 'prev' and cndPos > 0 then
        outCondKey = cndKeys[cndPos - 1]
      elsif direction == 'next' and cndPos < (cndKeys.size - 1) then
        outCondKey = cndKeys[cndPos + 1]
      end

      cndPos = cndKeys.index(outCondKey)
      if cndPos and cndPos >= 0 then
        has_prev = true if cndPos > 0
        has_next = true if cndPos < (cndKeys.size - 1)
      end

      if outCondYear then
        outCondYear = outCondKey[0..3]
        if outCondMonth then
          outCondMonth = outCondKey[4..5]
        end
      end
    end

    # 表示中の年月以外は結果から除外する
    @konyu_rirekis.delete_if {|item|
      item["sumCndKey"] != outCondKey and item["sumCndKey"] != "dummy"
    }

    records = @konyu_rirekis.size
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;
    @konyu_rirekis = @konyu_rirekis[start, limit]

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @konyu_rirekis,
      cond: {
        outCondYear: outCondYear,
        outCondMonth: outCondMonth,
        has_prev: has_prev,
        has_next: has_next
      }
    }

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end

  end

  # GET /toukeis/graph
  # GET /toukeis/graph.json
  def graph
    logger.debug("graph: " + params.to_yaml)
    @graph_cond = {
      sumUnt: params[:sumUnt],
      outCnd: params[:outCond],
      outYm: params[:outCondYear] + params[:outCondMonth],
      targetSpnFrom: params[:targetSpnFrom],
      targetSpnTo: params[:targetSpnTo]
    }
    respond_to do |format|
      format.html # index.html.erb
      # format.json { render json: @responce }
    end

  end

  # POST /toukeis/graph_data.json
  def graph_data
    logger.debug(params)

    targetSpnFrom = Date.strptime(params[:targetSpnFrom], "%Y/%m/%d") if is_date?(params[:targetSpnFrom])
    targetSpnTo = Date.strptime(params[:targetSpnTo], "%Y/%m/%d") if is_date?(params[:targetSpnTo])
    # today = Date.today

    conditions = KonyuRireki.where("1 = ?", 1)
    conditions = conditions.where("\"kanryoDt\" >= ?", targetSpnFrom) if targetSpnFrom
    conditions = conditions.where("\"kanryoDt\" <= ?", targetSpnTo) if targetSpnTo
    logger.debug(conditions)

    # get db adapter
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']

    if params[:outCnd] == "1" then
      # 月別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y%m', \"kanryoDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"kanryoDt\",'%Y%m')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"kanryoDt\", 'YYYYMM')"
      end
    elsif params[:outCnd] == "2" then
      # 年度別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y', \"kanryoDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"kanryoDt\",'%Y')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"kanryoDt\", 'YYYY')"
      end
    else
      # 総合計
      sumCndKey = "'dummy'"
    end

    # Pending...
    sumUnts = {
      1 => SumUnts.new(
        "\"uketsukeSesakuTantoCd\"",
        # "users.myoji||' '||users.name",
        # "concat(users.myoji,' ',users.name)",
        str_sql_concat("users.myoji","' '","users.name"),
        "left outer join users on users.\"shainCd\" = konyu_rirekis.\"uketsukeSesakuTantoCd\"")
    }
    sumUnts.default = sumUnts[1]
    sumUnt = sumUnts[params[:sumUnt].to_i];

    # sumUnts = {
    #   1 => "uketsukeSesakuTantoCd",
    #   2 => "byoinCd",
    #   3 => "shohinNm",
    #   4 => "shubetsuCd",
    #   5 => "mitsumoriKomokuCd"
    # }

    toukeis = conditions.find(
      :all,
      :select => "#{sumCndKey} \"sumCndKey\", #{sumUnt.keyCd} \"sumUntKey\", #{sumUnt.keyLabel} \"sumUnt\", sum(kin) kingaku, count(*) daisu ",
      :joins => sumUnt.joins,
      :group  => "\"sumCndKey\", \"sumUntKey\", \"sumUnt\" ",
      :order  => "\"sumCndKey\", \"sumUntKey\" ASC")

    # 表示中の年月以外は結果から除外する
    toukeis.delete_if {|item|
      item["sumCndKey"] != params[:outYm] and item["sumCndKey"] != "dummy"
    }

    @responce = {
      rsdata: toukeis
    }
    logger.debug("graph_data_response: " + @responce.to_yaml)
    respond_to do |format|
      # format.html # index.html.erb
      format.json { render json: @responce }
    end

  end

  private

  def is_date? strDate
    if strDate then
      match = /(\d+)\/(\d+)\/(\d+)/.match(strDate)
      if match then
        parts = match.captures
        if parts.size == 3 and Date.valid_date?(parts[0].to_i, parts[1].to_i, parts[2].to_i) then
          return true
        end
      end
    end
  end

  def str_sql_concat *strs
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "mysql2" then
      "concat(#{strs.join(',')})"
    else
      strs.join("||")
    end
  end

end
