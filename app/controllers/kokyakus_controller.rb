# encoding: utf-8
class KokyakusController < ApplicationController
  # GET /kokyakus
  # GET /kokyakus.json
  def index
    respond_to do |format|
      format.html # index.html.erb
      #format.json { render json: @responce }
    end
  end

  # GET /kokyakus/search
  # GET /kokyakus/search.json
  def search
    conditions = Kokyaku.where("\"delFlg\" = ?", 0)
    conditions = conditions.where("\"kokyakuId\" >= ?", params[:kokyaku][:kokyakuIdFrom].to_i) if params[:kokyaku][:kokyakuIdFrom] != ""
    conditions = conditions.where("\"kokyakuId\" <= ?", params[:kokyaku][:kokyakuIdTo].to_i) if params[:kokyaku][:kokyakuIdTo] != ""
    conditions = conditions.where("\"kokyakuNm1\" LIKE ?", "%" + params[:kokyaku][:kokyakuNm1] + "%") if params[:kokyaku][:kokyakuNm1] != ""
    conditions = conditions.where("\"kokyakuNm2\" LIKE ?", "%" + params[:kokyaku][:kokyakuNm2] + "%") if params[:kokyaku][:kokyakuNm2] != ""
    conditions = conditions.where("\"kokyakuNmKana1\" LIKE ?", "%" + params[:kokyaku][:kokyakuNmKana1] + "%") if params[:kokyaku][:kokyakuNmKana1] != ""
    conditions = conditions.where("\"kokyakuNmKana2\" LIKE ?", "%" + params[:kokyaku][:kokyakuNmKana2] + "%") if params[:kokyaku][:kokyakuNmKana2] != ""
    conditions = conditions.where("\"seibetsu\" = ?", params[:kokyaku][:seibetsu]) if params[:kokyaku][:seibetsu] != ""

    # 生年月日は「元号」「年」「月」「日」を連結して比較する
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    logger.debug(adapter)
    if adapter == "sqlite3" then
      # for sqlite
      tanjoDtCondition = str_sql_concat("SUBSTR('0'||\"tanjoGengo\",-1,1)", "SUBSTR('00'||\"tanjoYear\",-2,2)", "SUBSTR('00'||\"tanjoMonth\",-2,2)", "SUBSTR('00'||\"tanjoDay\",-2,2)")
    else
      # for mysql、postgres
      tanjoDtCondition = str_sql_concat("LPAD(CAST(\"tanjoGengo\" AS char), 1, '0') ", " LPAD(CAST(\"tanjoYear\" AS char), 2, '0') ", " LPAD(CAST(\"tanjoMonth\" AS char), 2, '0') ", " LPAD(CAST(\"tanjoDay\" AS char), 2, '0')")
    end

    if adapter == "mysql2" then
      # for mysql
      strIntegerType = "SIGNED"
    else
      # for sqlite、postgres
      strIntegerType = "INTEGER"
    end

    if params[:kokyaku][:tanjoGengoFrom].present? || params[:kokyaku][:tanjoYearFrom].present? || params[:kokyaku][:tanjoMonthFrom].present? || params[:kokyaku][:tanjoDayFrom].present?
      tanjoGengoFrom = "0"
      tanjoYearFrom  = "00"
      tanjoMonthFrom = "00"
      tanjoDayFrom   = "00"

      if params[:kokyaku][:tanjoGengoFrom].present?
        tanjoGengoFrom = format("%01d", params[:kokyaku][:tanjoGengoFrom])
      end
      if params[:kokyaku][:tanjoYearFrom].present?
        tanjoYearFrom = format("%02d", params[:kokyaku][:tanjoYearFrom])
      end
      if params[:kokyaku][:tanjoMonthFrom].present?
        tanjoMonthFrom = format("%02d", params[:kokyaku][:tanjoMonthFrom])
      end
      if params[:kokyaku][:tanjoDayFrom].present?
        tanjoDayFrom = format("%02d", params[:kokyaku][:tanjoDayFrom])
      end

      tanjoDtFrom = (tanjoGengoFrom.to_s + tanjoYearFrom.to_s + tanjoMonthFrom.to_s + tanjoDayFrom.to_s).to_i
      conditions = conditions.where("CAST(" + tanjoDtCondition + " AS " + strIntegerType + " ) >= ?", tanjoDtFrom)
    end

    if params[:kokyaku][:tanjoGengoTo].present? || params[:kokyaku][:tanjoYearTo].present? || params[:kokyaku][:tanjoMonthTo].present? || params[:kokyaku][:tanjoDayTo].present?
      tanjoGengoTo = "9"
      tanjoYearTo  = "99"
      tanjoMonthTo = "99"
      tanjoDayTo   = "99"

      if params[:kokyaku][:tanjoGengoTo].present?
        tanjoGengoTo = format("%01d", params[:kokyaku][:tanjoGengoTo])
      end
      if params[:kokyaku][:tanjoYearTo].present?
        tanjoYearTo = format("%02d", params[:kokyaku][:tanjoYearTo])
      end
      if params[:kokyaku][:tanjoMonthTo].present?
        tanjoMonthTo = format("%02d", params[:kokyaku][:tanjoMonthTo])
      end
      if params[:kokyaku][:tanjoDayTo].present?
        tanjoDayTo = format("%02d", params[:kokyaku][:tanjoDayTo])
      end

      tanjoDtTo = (tanjoGengoTo.to_s + tanjoYearTo.to_s + tanjoMonthTo.to_s + tanjoDayTo.to_s).to_i
      conditions = conditions.where("CAST(" + tanjoDtCondition + " AS " + strIntegerType + " ) <= ?", tanjoDtTo)
    end

    conditions = conditions.where("\"postNo\" LIKE ?", params[:kokyaku][:postNo] + "%") if params[:kokyaku][:postNo] != ""
    conditions = conditions.where("address1 LIKE ?", "%" + params[:kokyaku][:address1] + "%") if params[:kokyaku][:address1] != ""
    conditions = conditions.where("address2 LIKE ?", "%" + params[:kokyaku][:address2] + "%") if params[:kokyaku][:address2] != ""
    conditions = conditions.where("tel1 LIKE ?", params[:kokyaku][:tel1] + "%") if params[:kokyaku][:tel1] != ""
    conditions = conditions.where("tel2 LIKE ?", params[:kokyaku][:tel2] + "%") if params[:kokyaku][:tel2] != ""
    conditions = conditions.where("fax LIKE ?", params[:kokyaku][:fax] + "%") if params[:kokyaku][:fax] != ""
    conditions = conditions.where(str_sql_concat("COALESCE(sb1.\"shobyoNm\", '') ", "COALESCE(sb2.\"shobyoNm\", '') ", "COALESCE(sb3.\"shobyoNm\", '') ") + " LIKE ?", "%" + params[:kokyaku][:shobyoNm] + "%") if params[:kokyaku][:shobyoNm] != ""
    conditions = conditions.where("\"gakkoNm\" LIKE ?", "%" + params[:kokyaku][:gakkoNm] + "%") if params[:kokyaku][:gakkoNm] != ""
    #logger.debug(conditions)


    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

    records = conditions.count(:joins => joins)

    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;
    @kokyakus = conditions.find(
      :all,
      :select => select,
      :joins => joins,
      # :joins => "LEFT OUTER JOIN shobyos shobyo2 ON shobyos.shobyoCd = kokyakus.shobyouCd2",
      # :joins => "LEFT OUTER JOIN shobyos shobyo3 ON shobyos.shobyoCd = kokyakus.shobyouCd3",
      # :include => [:shobyo],
      :offset => start,
      :limit => limit,
      :order => "\"kokyakuId\" DESC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @kokyakus
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /kokyakus/1
  # GET /kokyakus/1.json
  def show
    # @kokyaku = Kokyaku.find(params[:id])
    @kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => params[:id], :delFlg => 0})

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /kokyakus/new
  # GET /kokyakus/new.json
  def new
    @kokyaku = Kokyaku.new
    @shobyo = Shobyo.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /kokyakus/1/edit
  def edit
    logger.debug(params)
    # @kokyaku = Kokyaku.find(params[:id])
    @kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => params[:id], :delFlg => 0})
    @shobyo = Shobyo.all
  end

  # POST /kokyakus
  # POST /kokyakus.json
  def create
    logger.debug(params[:kokyaku])
    @kokyaku = Kokyaku.new(params[:kokyaku])

    # 現在日付から年度を取得する
    nend = get_nend()

    # 顧客IDの年度内最大値を取得する
    maxId = Kokyaku.maximum(:kokyakuId, :conditions => ["\"kokyakuId\" BETWEEN ? AND ?", (nend.to_s + "00000").to_i, (nend.to_s + "99999").to_i])
    if maxId.blank? then
      maxId = 0;
    end
    maxId_s = maxId.to_s
    if maxId_s.size > 5 then
      maxId = maxId_s[(maxId_s.size - 5),maxId_s.size].to_i
    end

    # 顧客IDを生成する -> 年度下2桁+5桁の連番
    @kokyaku.kokyakuId = "#{nend}#{format("%05d",(maxId + 1))}".to_i

    respond_to do |format|
      if @kokyaku.save
        format.html { redirect_to action: "index", notice: 'Kokyaku was successfully created.', reload: 'on' }
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
    logger.debug(params[:kokyaku])
    # @kokyaku = Kokyaku.find(params[:id])
    @kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => params[:id], :delFlg => 0})

    respond_to do |format| # TODO:ローカルでエラーになる…
      # if @kokyaku.update_attributes(params[:kokyaku])
      if @kokyaku.update_attributes(params[:kokyaku], {:kokyakuId => params[:id]})
      # if @kokyaku.update_attributes(params[:kokyaku], {:kokyakuId => params[:id], :delFlg => 0})
        format.html { redirect_to action: "index", notice: 'Kokyaku was successfully updated.', reload: 'on' }
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
    # @kokyaku = Kokyaku.find(params[:id])
    @kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => params[:id], :delFlg => 0})

    #@kokyaku.destroy
    logger.debug(@kokyaku)
    respond_to do |format|
      if @kokyaku.update_attribute(:delFlg, 1)
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully logical deleted.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /kokyakus/delete_list
  # POST /kokyakus/delete_list.json
  def delete_list
    logger.debug(params[:deleteIdList])

    if params[:deleteIdList].present?
      # 一括削除実行
      Kokyaku.update_all("\"delFlg\"=1, \"koshinshaId\"=" + params[:koshinshaId], "\"kokyakuId\" IN (" + params[:deleteIdList] + ")")
    end

    respond_to do |format|
      format.html { redirect_to action: "index", notice: 'Kokyaku was successfully bulk logical deleted.', reload: 'on' }
      format.json { head :no_content }
    end
  end

  def get_select_stmt
    # 生年月日は「元号」「年」「月」「日」を連結して表示する
    tanjoGengoStr = "CASE kokyakus.\"tanjoGengo\" WHEN 1 THEN '大正' WHEN 2 THEN '昭和' WHEN 3 THEN '平成' ELSE NULL END "

    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    logger.debug(adapter)
    if adapter == "sqlite3" then
      # for sqlite
      tanjoDt = str_sql_concat(tanjoGengoStr, "SUBSTR('00'||kokyakus.\"tanjoYear\",-2,2)", "'年'" , "SUBSTR('00'||kokyakus.\"tanjoMonth\",-2,2)", "'月'", "SUBSTR('00'||kokyakus.\"tanjoDay\",-2,2)", "'日' ")
    else
      # for mysql、postgres
      tanjoDt = str_sql_concat(tanjoGengoStr, "LPAD(CAST(kokyakus.\"tanjoYear\" AS char), 2, '0') ", "'年'" , "LPAD(CAST(kokyakus.\"tanjoMonth\" AS char), 2, '0') ", "'月'", "LPAD(CAST(kokyakus.\"tanjoDay\" AS char), 2, '0') ", "'日' ")
    end

    select = "kokyakus.*"
    select << "," + tanjoDt + " AS \"tanjoDt\""
    select << ", " + str_sql_concat("kokyakus.\"kokyakuNm1\"", "' '", "kokyakus.\"kokyakuNm2\"") + " AS \"kokyakuNm\""
    select << ", " + str_sql_concat("kokyakus.\"kokyakuNmKana1\"", "' '", "kokyakus.\"kokyakuNmKana2\"") + " AS \"kokyakuNmKana\""
    select << ",sb1.\"shobyoNm\" AS \"shobyoNm1\""
    select << ",sb2.\"shobyoNm\" AS \"shobyoNm2\""
    select << ",sb3.\"shobyoNm\" AS \"shobyoNm3\""
    select << ",CASE seibetsu WHEN 0 THEN '男性' WHEN 1 THEN '女性' ELSE NULL END AS \"seibetsuNm\""

    joins = ""
    joins << "LEFT OUTER JOIN shobyos sb1 ON sb1.\"shobyoCd\" = kokyakus.\"shobyouCd1\" "
    joins << "LEFT OUTER JOIN shobyos sb2 ON sb2.\"shobyoCd\" = kokyakus.\"shobyouCd2\" "
    joins << "LEFT OUTER JOIN shobyos sb3 ON sb3.\"shobyoCd\" = kokyakus.\"shobyouCd3\" "

    # joins << "LEFT OUTER JOIN kokyakus ON kokyakus.\"kokyakuId\" = konyu_rirekis.\"kokyakuId\" "
    # joins << "LEFT OUTER JOIN users ust ON ust.\"shainCd\" = konyu_rirekis.\"uketsukeSesakuTantoCd\" "
    # joins << "LEFT OUTER JOIN users kat ON kat.\"shainCd\" = konyu_rirekis.\"kariAwaseTantoCd\" "
    # joins << "LEFT OUTER JOIN users nt ON nt.\"shainCd\" = konyu_rirekis.\"nohinTantoCd\" "
    # joins << "LEFT OUTER JOIN users mt ON mt.\"shainCd\" = konyu_rirekis.\"mitsumoriTantoEigyoCd\" "
    # joins << "LEFT OUTER JOIN seihins ON seihins.\"seihinId\" = konyu_rirekis.\"seihinId\" "
    # joins << "LEFT OUTER JOIN hoken_shubetsus hs1 ON hs1.\"hokenShubetsuCd\" = konyu_rirekis.\"hokenShubetsuCd1\" "
    # joins << "LEFT OUTER JOIN hoken_shubetsus hs2 ON hs2.\"hokenShubetsuCd\" = konyu_rirekis.\"hokenShubetsuCd2\" "

    return select, joins
  end

  def get_nend
    today = Date.today
    # 年度(西暦)
    year = today.year
    case today.month
    when 1..3
      year = today.year - 1
    end
    # 年度(和暦) ※平成固定
    return year - 1988
  end

  def str_sql_concat *strs
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "mysql2" then
      "concat(#{strs.join(',')})"
    else
      strs.join("||")
    end
  end

  private :get_select_stmt, :get_nend, :str_sql_concat

end
