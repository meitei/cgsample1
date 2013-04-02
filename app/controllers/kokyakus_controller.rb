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
    conditions = conditions.where("\"kokyakuNm\" LIKE ?", "%" + params[:kokyaku][:kokyakuNm] + "%") if params[:kokyaku][:kokyakuNm] != ""
    conditions = conditions.where("\"kokyakuNmKana\" LIKE ?", "%" + params[:kokyaku][:kokyakuNmKana] + "%") if params[:kokyaku][:kokyakuNmKana] != ""
    conditions = conditions.where("\"seibetsu\" = ?", params[:kokyaku][:seibetsu]) if params[:kokyaku][:seibetsu] != ""
    conditions = conditions.where("\"tanjoDt\" >= ?", params[:kokyaku][:tanjoDtFrom]) if params[:kokyaku][:tanjoDtFrom] != ""
    conditions = conditions.where("\"tanjoDt\" <= ?", params[:kokyaku][:tanjoDtTo]) if params[:kokyaku][:tanjoDtTo] != ""
    conditions = conditions.where("\"postNo\" LIKE ?", params[:kokyaku][:postNo] + "%") if params[:kokyaku][:postNo] != ""
    conditions = conditions.where("address1 LIKE ?", "%" + params[:kokyaku][:address1] + "%") if params[:kokyaku][:address1] != ""
    conditions = conditions.where("address2 LIKE ?", "%" + params[:kokyaku][:address2] + "%") if params[:kokyaku][:address2] != ""
    conditions = conditions.where("tel1 LIKE ?", params[:kokyaku][:tel1] + "%") if params[:kokyaku][:tel1] != ""
    conditions = conditions.where("tel2 LIKE ?", params[:kokyaku][:tel2] + "%") if params[:kokyaku][:tel2] != ""
    conditions = conditions.where("fax LIKE ?", params[:kokyaku][:fax] + "%") if params[:kokyaku][:fax] != ""
    conditions = conditions.where("\"shobyoNm1\"||\"shobyoNm2\"||\"shobyoNm3\" LIKE ?", "%" + params[:kokyaku][:shobyoNm] + "%") if params[:kokyaku][:shobyoNm] != ""
    conditions = conditions.where("\"gakkoNm\" LIKE ?", "%" + params[:kokyaku][:gakkoNm] + "%") if params[:kokyaku][:gakkoNm] != ""
    #logger.debug(conditions)


    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

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
    @kokyaku = Kokyaku.find(params[:id])

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
    @kokyaku = Kokyaku.find(params[:id])
    @shobyo = Shobyo.all
  end

  # POST /kokyakus
  # POST /kokyakus.json
  def create
    logger.debug(params[:kokyaku])
    @kokyaku = Kokyaku.new(params[:kokyaku])

    # 現在日付から年度を取得する
    nend = get_nend()

    # 購入履歴IDの最大を取得する
    maxId = Kokyaku.maximum(:kokyakuId, :conditions => ["\"kokyakuId\" like ?", nend.to_s + "%"]);
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
        format.html { redirect_to action: "index", notice: 'Kokyaku was successfully created.' }
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
        format.html { redirect_to action: "index", notice: 'Kokyaku was successfully updated.' }
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
    #@kokyaku.destroy
    logger.debug(@kokyaku)
    respond_to do |format|
      if @kokyaku.update_attribute(:delFlg, 1)
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  def get_select_stmt
    select = "kokyakus.*"
    select << ",sb1.\"shobyoNm\" \"shobyoNm1\""
    select << ",sb2.\"shobyoNm\" \"shobyoNm2\""
    select << ",sb3.\"shobyoNm\" \"shobyoNm3\""
    select << ",CASE seibetsu WHEN 0 THEN '男性' WHEN 1 THEN '女性' ELSE NULL END \"seibetsuNm\""

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

  private :get_select_stmt, :get_nend

end
