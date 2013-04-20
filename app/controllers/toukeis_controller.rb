class ToukeisController < ApplicationController

  SumUnts = Struct.new(:keyCd, :keyLabel, :joins, :kingaku, :count)

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

    # 検索を実行する
    @toukeis = search_data

    # 検索結果をSessionに保存
    session[:toukeis] = @toukeis.clone

    # # 集計単位のリストを作成する
    # cndKeys = []
    # @toukeis.each {|row|
    #   cndKeys << row["sumCndKey"] if not row["sumCndKey"].blank?
    # }
    # cndKeys = cndKeys.uniq.sort if cndKeys.size > 1
    # logger.debug(cndKeys)

    # has_prev = false
    # has_next = false
    # outCondYear = outCondMonth = ""

    # if not cndKeys.empty? and params[:outCond] != "3" then
    #   outCondYear = cndKeys.first[0..3]
    #   outCondMonth = cndKeys.first[4..5] if cndKeys.first.length == 6
    # end

    # # 次のページが存在するか？
    # has_next = true if cndKeys.size > 1

    # # 表示中の年月以外は結果から除外する
    # @toukeis.delete_if {|item|
    #   item["sumCndKey"] != outCondYear+outCondMonth and item["sumCndKey"] != "dummy"
    # }

    # records = @toukeis.size
    # limit = params[:rows].to_i
    # page = params[:page].to_i
    # if records > 0
    #   n = records.quo(limit)
    #   total_pages = n.ceil
    # else
    #   total_pages = 0
    # end
    # start = limit * page - limit;
    # @toukeis = @toukeis[start, limit]

    # @responce = {
    #   total: total_pages.to_s,
    #   page: params[:page],
    #   records: records.to_s,
    #   rows: @toukeis,
    #   cond: {
    #     outCondYear: outCondYear,
    #     outCondMonth: outCondMonth,
    #     has_prev: has_prev,
    #     has_next: has_next
    #   }
    # }

    # レスポンスの編集
    edit_response

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /toukeis/move_page
  # GET /toukeis/move_page.json
  def move_page

    logger.debug("move_page: " + params.to_yaml)

    # 検索結果をSessionから取得
    @toukeis = session[:toukeis].clone

    # # 集計単位のリストを作成する
    # cndKeys = []
    # @toukeis.each {|row|
    #   cndKeys << row["sumCndKey"] if not row["sumCndKey"].blank?
    # }
    # cndKeys = cndKeys.uniq.sort if cndKeys.size > 1

    # has_prev = false
    # has_next = false
    # if not cndKeys.empty? then

    #   outCondKey = outCondYear
    #   outCondKey = outCondKey + outCondMonth if outCondMonth

    #   cndPos = cndKeys.index(outCondKey)
    #   if direction == 'prev' and cndPos > 0 then
    #     outCondKey = cndKeys[cndPos - 1]
    #   elsif direction == 'next' and cndPos < (cndKeys.size - 1) then
    #     outCondKey = cndKeys[cndPos + 1]
    #   end

    #   cndPos = cndKeys.index(outCondKey)
    #   if cndPos and cndPos >= 0 then
    #     has_prev = true if cndPos > 0
    #     has_next = true if cndPos < (cndKeys.size - 1)
    #   end

    #   if outCondYear then
    #     outCondYear = outCondKey[0..3]
    #     if outCondMonth then
    #       outCondMonth = outCondKey[4..5]
    #     end
    #   end
    # end

    # # 表示中の年月以外は結果から除外する
    # @toukeis.delete_if {|item|
    #   item["sumCndKey"] != outCondKey and item["sumCndKey"] != "dummy"
    # }

    # records = @toukeis.size
    # limit = params[:rows].to_i
    # page = params[:page].to_i
    # if records > 0
    #   n = records.quo(limit)
    #   total_pages = n.ceil
    # else
    #   total_pages = 0
    # end
    # start = limit * page - limit;
    # @toukeis = @toukeis[start, limit]

    # @responce = {
    #   total: total_pages.to_s,
    #   page: params[:page],
    #   records: records.to_s,
    #   rows: @toukeis,
    #   cond: {
    #     outCondYear: outCondYear,
    #     outCondMonth: outCondMonth,
    #     has_prev: has_prev,
    #     has_next: has_next
    #   }
    # }

    # レスポンスの編集
    edit_response(first: false)

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
      outCond: params[:outCond],
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

    # 検索を実行する
    toukeis = search_data

    # 表示中の年月以外は結果から除外する
    toukeis.delete_if {|item|
      item["sumCndKey"] != params[:outYm] and item["sumCndKey"] != "dummy"
    }
    logger.debug(params[:outYm])

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

  def get_sum_cnd_unt
    # get db adapter
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']

    if params[:outCond] == "1" then
      # 月別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y%m', \"juchuDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"juchuDt\",'%Y%m')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"juchuDt\", 'YYYYMM')"
      end
    elsif params[:outCond] == "2" then
      # 年度別
      if adapter == "sqlite3" then
        # SQLite
        sumCndKey = "strftime('%Y', \"juchuDt\")"
      elsif adapter == "mysql2" then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"juchuDt\",'%Y')"
      else
        # PostgreSQL
        sumCndKey = "to_char(\"juchuDt\", 'YYYY')"
      end
    else
      # 総合計
      sumCndKey = "'dummy'"
    end

    # Pending...
    sumUnts = {
      1 => SumUnts.new(
        "konyu_rirekis.\"uketsukeSesakuTantoCd\"",
        str_sql_concat("users.myoji","' '","users.name"),
        "inner join users on users.\"shainCd\" = konyu_rirekis.\"uketsukeSesakuTantoCd\"",
        "sum(konyu_rirekis.kin)",
        "count(*)"
        ),
      2 => SumUnts.new(
        "konyu_rirekis.\"byoinCd\"",
        "byoins.\"byoinNm\"",
        "inner join byoins on byoins.\"byoinCd\" = konyu_rirekis.\"byoinCd\"",
        "sum(konyu_rirekis.kin)",
        "count(*)"
        ),
      3 => SumUnts.new(
        "konyu_rirekis.\"shohinNm\"",
        "konyu_rirekis.\"shohinNm\"",
        nil,
        "sum(konyu_rirekis.kin)",
        "count(*)"
        ),
      4 => SumUnts.new(
        "msh.\"seihinNo\"",
        "mtk.\"seihinName\"",
        "inner join mitsumoris mit on mit.\"konyuRirekiId\" = konyu_rirekis.\"konyuRirekiId\" and mit.\"kokyakuId\" = konyu_rirekis.\"kokyakuId\" " + "left outer join mitsumori_seihins msh on msh.\"mitsumoriNo\" = mit.\"mitsumoriNo\" " + "left outer join mitsumori_tankas mtk on mtk.\"seihinNo\" = msh.\"seihinNo\" ",
        "sum(msh.kin + msh.tax)",
        "sum(msh.suryo)"
        ),
      5 => SumUnts.new(
        "konyu_rirekis.\"seihinId\"",
        "\"hinmeiNm\"",
        "inner join seihins on seihins.\"seihinId\" = konyu_rirekis.\"seihinId\"",
        "sum(konyu_rirekis.kin)",
        "count(*)"
        )
    }
    sumUnts.default = sumUnts[1]
    sumUnt = sumUnts[params[:sumUnt].to_i];

    return sumCndKey, sumUnt
  end

  def search_data
    targetSpnFrom = Date.strptime(params[:targetSpnFrom], "%Y/%m/%d") if is_date?(params[:targetSpnFrom])
    targetSpnTo = Date.strptime(params[:targetSpnTo], "%Y/%m/%d") if is_date?(params[:targetSpnTo])
    # today = Date.today

    conditions = KonyuRireki.where("1 = ?", 1)
    conditions = conditions.where("\"juchuDt\" >= ?", targetSpnFrom) if targetSpnFrom
    conditions = conditions.where("\"juchuDt\" <= ?", targetSpnTo) if targetSpnTo
    logger.debug(conditions)

    # 集計条件、集権単位を取得する
    sumCndKey, sumUnt = get_sum_cnd_unt

    conditions.find(
      :all,
      :select => "#{sumCndKey} \"sumCndKey\", #{sumUnt.keyCd} \"sumUntKey\", #{sumUnt.keyLabel} \"sumUnt\", #{sumUnt.kingaku} kingaku, #{sumUnt.count} daisu ",
      :joins => sumUnt.joins,
      :group  => "\"sumCndKey\", \"sumUntKey\", \"sumUnt\" ",
      :order  => "\"sumCndKey\", \"sumUntKey\" ASC")
  end

  def edit_response (options = {:first => true})
    logger.debug(options)

    # 集計単位のリストを作成する
    cndKeys = []
    @toukeis.each {|row|
      cndKeys << row["sumCndKey"] if not row["sumCndKey"].blank?
    }
    cndKeys = cndKeys.uniq.sort if cndKeys.size > 1
    logger.debug(cndKeys)

    has_prev = false
    has_next = false
    outCondYear = outCondMonth = ""

    if options[:first] == true then
      # 初回検索時
      if not cndKeys.empty? and params[:outCond] != "3" then
        outCondYear = cndKeys.first[0..3]
        outCondMonth = cndKeys.first[4..5] if cndKeys.first.length == 6
      end

      # 次のページが存在するか？
      has_next = true if cndKeys.size > 1
    else
      # 次ページ検索時
      if not cndKeys.empty? then

        outCondYear = params[:outCondYear]
        outCondMonth = params[:outCondMonth]
        direction = params[:direction]

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
    end

    # 表示中の年月以外は結果から除外する
    @toukeis.delete_if {|item|
      item["sumCndKey"] != outCondYear+outCondMonth and item["sumCndKey"] != "dummy"
    }

    records = @toukeis.size
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;
    @toukeis = @toukeis[start, limit]

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @toukeis,
      cond: {
        outCondYear: outCondYear,
        outCondMonth: outCondMonth,
        has_prev: has_prev,
        has_next: has_next
      }
    }
  end

end
