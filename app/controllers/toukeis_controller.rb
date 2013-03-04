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

    targetSpnFrom = Date.strptime(params[:targetSpnFrom], "%Y/%m/%d") if isDate(params[:targetSpnFrom])
    targetSpnTo = Date.strptime(params[:targetSpnTo], "%Y/%m/%d") if isDate(params[:targetSpnTo])
    today = Date.today

    # # 範囲指定からみた本日の位置
    # if targetSpnFrom > today then
    #   position = -1
    # elsif targetSpnTo < today then
    #   position = 1
    # else
    #   position = 0
    # end

    # @outConds = []
    # @outCondYear = @outCondMonth = nil
    # if params[:outCond] == "1" then
    #   # 月別
    #   if targetSpnFrom.year == targetSpnTo.year then
    #     (targetSpnFrom.year ... targetSpnFrom.year).each{(|year|
    #       (targetSpnFrom.month ... targetSpnFrom.month).each{(|month|
    #         @outConds << year.to_s + "-" + month.to_s
    #         if position.zero? then
    #           if year == today.year then
    #             @outCondYear = year.to_s
    #             @outCondMonth = month.to_s if month == today.month
    #           end
    #         elsif position < 0 then
    #           #過去が指定された
    #         elsif position > 0 then
    #           #未来が指定された
    #         end
    #       }
    #     }
    #   end
    #   @outCondYear =
    #   untDateTo = Date.new(year, month, -1);
    # elsif params[:outCond] == "2" then
    #   # 年度別
    #   untDateFrom = Date.new(year, 1, 1);
    #   untDateTo = Date.new(year, 12, 31);
    # else
    #   # 総合計
    #   untDateFrom = nil
    #   untDateTo = nil
    # end

    conditions = KonyuRireki.where("1 = ?", 1)
    conditions = conditions.where("\"mitsumoriDt\" >= ?", targetSpnFrom) if targetSpnFrom
    conditions = conditions.where("\"mitsumoriDt\" <= ?", targetSpnTo) if targetSpnTo
    logger.debug(conditions)

    if params[:outCond] == "1" then
      # 月別
      if Rails.env.production? then
        # PostgreSQL
        sumCndKey = "to_char(\"mitsumoriDt\", 'YYYYMM')"
      elsif Rails.env.staging? then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"mitsumoriDt\",'%Y%m')"
      else
        # SQLite
        sumCndKey = "strftime('%Y%m', \"mitsumoriDt\")"
      end
    elsif params[:outCond] == "2" then
      # 年度別
      if Rails.env.production? then
        # PostgreSQL
        sumCndKey = "to_char(\"mitsumoriDt\", 'YYYY')"
      elsif Rails.env.staging? then
        # MySQL
        sumCndKey = "DATE_FORMAT(\"mitsumoriDt\",'%Y')"
      else
        # SQLite
        sumCndKey = "strftime('%Y', \"mitsumoriDt\")"
      end
    else
      # 総合計
      sumCndKey = "'dummy'"
    end

    # Pending...
    sumUnts = {
      1 => SumUnts.new(
        "uketsukeSesakuTantoCd",
        "shains.name",
        "left outer join shains on shains.shainCd = konyu_rirekis.uketsukeSesakuTantoCd")
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

    # FIXME: 検索結果に対して位置を指定できるようにする
    records = conditions.count
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;
    # FIXME: ここまで

    @konyu_rirekis = conditions.find(
      :all,
      :select => "#{sumCndKey} sumCndKey, #{sumUnt.keyCd} sumUntKey, #{sumUnt.keyLabel} sumUnt, sum(kin) kingaku, count(*) daisu ",
      :joins => sumUnt.joins,
      :group  => "sumCndKey, sumUntKey ",
      :offset => start,
      :limit  => limit,
      :order  => "sumCndKey, sumUntKey ASC")

    # 集計単位のリストを作成する
    cndKeys = []
    @konyu_rirekis.each {|row|
      cndKeys << row["sumCndKey"]
    }
    cndKeys.uniq!.sort!
    logger.debug(cndKeys)

    has_prev = false
    has_next = false
    outCondYear = outCondMonth = ""

    if not cndKeys.empty? then
      today_year = today.year.to_s
      today_month = sprintf("%02d", today.month)
      if params[:outCond] == "1" then
        # 月別
        if cndKeys.index(today_year+today_month) then
          outCondYear = today_year
          outCondMonth = today_month
        else
          if cndKeys.first > today_year+today_month then
            # 本日が検索結果の年月より過去の場合
            outCondYear = cndKeys.first[0..3]
            outCondMonth = cndKeys.first[4..5]
          else
            # 本日が検索結果の年月より未来の場合
            outCondYear = cndKeys.last[0..3]
            outCondMonth = cndKeys.last[4..5]
          end
        end

        # outCondDate = Date.parse(outCondYear+outCondMonth+"01")
        # prev_date = outCondDate << 1
        # next_date = outCondDate >> 1
        # has_prev = true if cndKeys.index(prev_date.strftime("%y%m"))
        # has_next = true if cndKeys.index(next_date.strftime("%Y%m"))
      elsif params[:outCond] == "2" then
        # 年度別
        if cndKeys.index(today_year) then
          outCondYear = today_year
        else
          if cndKeys.first > today_year then
            # 本日が検索結果の年より過去の場合
            outCondYear = cndKeys.first
          else
            # 本日が検索結果の年より未来の場合
            outCondYear = cndKeys.last
          end
        end
        # has_prev = true if cndKeys.index(outCondYear.to_i.next.to_s)
        # has_next = true if cndKeys.index(outCondYear.to_i.pred.to_s)
      else
        # 総合計
      end
      cndPos = cndKeys.index(outCondYear+outCondMonth)
      if cndPos and cndPos >= 0 then
        has_prev = true if cndPos > 0
        has_next = true if cndPos < (cndKeys.size - 1)
      end
    end
    logger.debug("outCondYear => #{outCondYear}, outCondMonth => #{outCondMonth}")

    # 表示中の年月以外は結果から除外する
    @konyu_rirekis.delete_if {|item|
      item["sumCndKey"] != outCondYear+outCondMonth and item["sumCndKey"] != "dummy"
    }

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
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  def kokyaku_list

    has_key = (params[:kokyakuId] != nil and params[:kokyakuId] != "")
    sqlbind_s = "%" + params[:kokyakuId] + "%" if has_key
    sqlbind_i = -1
    sqlbind_i = params[:kokyakuId].to_i if has_key and params[:kokyakuId] =~ /\d+/
    sqlstat = []
    sqlstat << "\"kokyakuId\" = ? "
    sqlstat << "\"kokyakuNm\" LIKE ? "

    conditions = Kokyaku.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_i, sqlbind_s) if has_key
    logger.debug(conditions)

    @kokyakus = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"kokyakuId\" DESC")

    # responce = []
    # @kokyakus.each {|k|
    #   responce << (k.kokyakuId + ":" + k.kokyakuNm)
    # }

    logger.debug(@responce)

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @responce }
    end
  end


  # GET /toukeis/graph
  # GET /toukeis/graph.json
  def graph
    # @kokyaku = Kokyaku.find(params[:id])

    # year = params[:outCondYear].to_i if params[:outCondYear]
    # month = params[:outCondMonth].to_i if params[:outCondMonth]
    # if year and month then
    #   # 月別
    #   untDateFrom = Date.new(year, month, 1);
    #   untDateTo = Date.new(year, month, -1);
    # elsif year then
    #   # 年度別
    #   untDateFrom = Date.new(year, 1, 1);
    #   untDateTo = Date.new(year, 12, 31);
    # else
    #   # 総合計
    #   untDateFrom = nil
    #   untDateTo = nil
    # end

    # conditions = KonyuRireki.where("1 = ?", 1)
    # conditions = conditions.where("\"mitsumoriDt\" >= ?", Date.strptime(params[:targetSpnFrom], "%Y/%m/%d")) if params[:targetSpnFrom] != ""
    # conditions = conditions.where("\"mitsumoriDt\" <= ?", Date.strptime(params[:targetSpnTo], "%Y/%m/%d")) if params[:targetSpnTo] != ""
    # conditions = conditions.where("\"mitsumoriDt\" >= ?", untDateFrom) if untDateFrom
    # conditions = conditions.where("\"mitsumoriDt\" >= ?", untDateTo) if untDateTo


    # logger.debug(conditions)

    # # Pending...
    # sumUnts = {
    #   1 => SumUnts.new(
    #     "uketsukeSesakuTantoCd",
    #     "shains.name",
    #     "left outer join shains on shains.shainCd = konyu_rirekis.uketsukeSesakuTantoCd")
    # }
    # sumUnts.default = sumUnts[1]
    # sumUnt = sumUnts[params[:sumUnt].to_i];

    # @konyu_rirekis = conditions.find(
    #   :all,
    #   :select => "#{sumUnt.keyCd} sumUntKey, #{sumUnt.keyLabel} sumUnt, sum(kin) kingaku, count(*) daisu ",
    #   :joins => sumUnt.joins,
    #   :group  => "sumUntKey ",
    #   :offset => start,
    #   :limit  => limit,
    #   :order  => "\"sumUntKey\" ASC")

    # @responce = {
    #   data: @konyu_rirekis
    # }

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end

  end

  # GET /kokyakus/new
  # GET /kokyakus/new.json
  def new
    @kokyaku = Kokyaku.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /kokyakus/1/edit
  def edit
    @kokyaku = Kokyaku.find(params[:id])
  end

  # POST /kokyakus
  # POST /kokyakus.json
  def create
    logger.debug(params)
    @kokyaku = Kokyaku.new(params[:kokyaku])

    respond_to do |format|
      if @kokyaku.save
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully created.' }
        format.json { render json: @kokyaku, status: :created, location: @kokyaku }
      else
        format.html { render action: "new" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /kokyakus/1
  # PUT /kokyakus/1.json
  def update
    @kokyaku = Kokyaku.find(params[:id])

    respond_to do |format|
      if @kokyaku.update_attributes(params[:kokyaku])
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kokyakus/1
  # DELETE /kokyakus/1.json
  def destroy
    @kokyaku = Kokyaku.find(params[:id])
    @kokyaku.destroy

    respond_to do |format|
      format.html { redirect_to kokyakus_url }
      format.json { head :no_content }
    end
  end

  private
  def isDate strDate
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


end
