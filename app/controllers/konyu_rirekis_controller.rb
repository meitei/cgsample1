# encoding: utf-8
class KonyuRirekisController < ApplicationController
  # GET /konyu_rirekis
  # GET /konyu_rirekis.json
  def index
    respond_to do |format|
      format.html # index.html.erb
      #format.json { render json: @responce }
    end
  end

  # GET /konyu_rirekis/search
  # GET /konyu_rirekis/search.json
  def search
    conditions = KonyuRireki.where("1 = 1")
    conditions = conditions.where("\"kokyakuId\" >= ?", params[:konyu_rireki][:kokyakuIdFrom].to_i) if params[:konyu_rireki][:kokyakuIdFrom] != ""
    conditions = conditions.where("\"kokyakuId\" <= ?", params[:konyu_rireki][:kokyakuIdTo].to_i) if params[:konyu_rireki][:kokyakuIdTo] != ""
    conditions = conditions.where("\"hokenShubetsuCd1\" = ?", params[:konyu_rireki][:hokenShubetsuCd1]) if params[:konyu_rireki][:hokenShubetsuCd1] != ""
    conditions = conditions.where("\"hokenShubetsuCd2\" = ?", params[:konyu_rireki][:hokenShubetsuCd2]) if params[:konyu_rireki][:hokenShubetsuCd2] != ""
    conditions = conditions.where("\"juchuDt\" >= ?", params[:konyu_rireki][:juchuDtFrom]) if params[:konyu_rireki][:juchuDtFrom] != ""
    conditions = conditions.where("\"juchuDt\" <= ?", params[:konyu_rireki][:juchuDtTo]) if params[:konyu_rireki][:juchuDtTo] != ""
    conditions = conditions.where("\"konyu_rirekis.byoinCd\" = ?", params[:konyu_rireki][:byoinCd].to_i) if params[:konyu_rireki][:byoinCd] != ""
    conditions = conditions.where("\"kariAwaseDt\" >= ?", params[:konyu_rireki][:kariAwaseDtFrom]) if params[:konyu_rireki][:kariAwaseDtFrom] != ""
    conditions = conditions.where("\"kariAwaseDt\" <= ?", params[:konyu_rireki][:kariAwaseDtTo]) if params[:konyu_rireki][:kariAwaseDtTo] != ""
    conditions = conditions.where("\"kokyakuNm\" LIKE ?", "%" + params[:konyu_rireki][:kokyakuNm] + "%") if params[:konyu_rireki][:kokyakuNm] != ""
    conditions = conditions.where("\"shohinNm\" LIKE ?", "%" + params[:konyu_rireki][:shohinNm] + "%") if params[:konyu_rireki][:shohinNm] != ""
    conditions = conditions.where("\"nohinDt\" >= ?", params[:konyu_rireki][:nohinDtFrom]) if params[:konyu_rireki][:nohinDtFrom] != ""
    conditions = conditions.where("\"nohinDt\" <= ?", params[:konyu_rireki][:nohinDtTo]) if params[:konyu_rireki][:nohinDtTo] != ""
    conditions = conditions.where("\"kokyakuNmKana\" LIKE ?", "%" + params[:konyu_rireki][:kokyakuNmKana] + "%") if params[:konyu_rireki][:kokyakuNmKana] != ""
    conditions = conditions.where("\"uketsukeSesakuTantoCd\" = ?", params[:konyu_rireki][:uketsukeSesakuTantoCd]) if params[:konyu_rireki][:uketsukeSesakuTantoCd] != ""
    conditions = conditions.where("\"kofuDt\" >= ?", params[:konyu_rireki][:kofuDtFrom]) if params[:konyu_rireki][:kofuDtFrom] != ""
    conditions = conditions.where("\"kofuDt\" <= ?", params[:konyu_rireki][:kofuDtTo]) if params[:konyu_rireki][:kofuDtTo] != ""
    conditions = conditions.where("\"shubetsuKn\" = ?", params[:konyu_rireki][:shubetsuKn]) if params[:konyu_rireki][:shubetsuKn] != ""
    conditions = conditions.where("\"kariAwaseTantoCd\" = ?", params[:konyu_rireki][:kariAwaseTantoCd]) if params[:konyu_rireki][:kariAwaseTantoCd] != ""
    conditions = conditions.where("\"nyukinDt\" >= ?", params[:konyu_rireki][:nyukinDtFrom]) if params[:konyu_rireki][:nyukinDtFrom] != ""
    conditions = conditions.where("\"nyukinDt\" <= ?", params[:konyu_rireki][:nyukinDtTo]) if params[:konyu_rireki][:nyukinDtTo] != ""
    conditions = conditions.where("\"seihinCd\" = ?", params[:konyu_rireki][:seihinCd]) if params[:konyu_rireki][:seihinCd] != ""
    conditions = conditions.where("\"nohinTantoCd\" = ?", params[:konyu_rireki][:nohinTantoCd]) if params[:konyu_rireki][:nohinTantoCd] != ""
    conditions = conditions.where("\"oshiinDt\" >= ?", params[:konyu_rireki][:oshiinDtFrom]) if params[:konyu_rireki][:oshiinDtFrom] != ""
    conditions = conditions.where("\"oshiinDt\" <= ?", params[:konyu_rireki][:oshiinDtTo]) if params[:konyu_rireki][:oshiinDtTo] != ""
    conditions = conditions.where("\"mitsumoriTantoEigyoCd\" = ?", params[:konyu_rireki][:mitsumoriTantoEigyoCd]) if params[:konyu_rireki][:mitsumoriTantoEigyoCd] != ""
    conditions = conditions.where("\"kanryoDt\" >= ?", params[:konyu_rireki][:kanryoDtFrom]) if params[:konyu_rireki][:kanryoDtFrom] != ""
    conditions = conditions.where("\"kanryoDt\" <= ?", params[:konyu_rireki][:kanryoDtTo]) if params[:konyu_rireki][:kanryoDtTo] != ""
    conditions = conditions.where("\"mitsumoriDt\" >= ?", params[:konyu_rireki][:mitsumoriDtFrom]) if params[:konyu_rireki][:mitsumoriDtFrom] != ""
    conditions = conditions.where("\"mitsumoriDt\" <= ?", params[:konyu_rireki][:mitsumoriDtTo]) if params[:konyu_rireki][:mitsumoriDtTo] != ""
    #logger.debug(conditions)

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

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

    @konyu_rirekis = conditions.find(
      :all,
      # :joins => "LEFT OUTER JOIN byoins ON byoins.byoinCd = konyu_rirekis.byoinCd",
      # :select => "konyu_rirekis.*, byoins.byoinNm",
      :select => select,
      :joins => joins,

      # :joins => "LEFT OUTER JOIN shobyos ON shobyos.shobyoCd = konyu_rirekis.shobyouCd1",
      # :joins => "LEFT OUTER JOIN shobyos shobyo2 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd2",
      # :joins => "LEFT OUTER JOIN shobyos shobyo3 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd3",
      # :include => [:shobyo],
      :offset => start,
      :limit => limit,
      :order => "\"kokyakuId\" ASC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @konyu_rirekis
    }
    logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /konyu_rirekis/1
  # GET /konyu_rirekis/1.json
  def show
    @konyu_rireki = KonyuRireki.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @konyu_rireki }
    end
  end

  # GET /konyu_rirekis/new
  # GET /konyu_rirekis/new.json
  def new
    # logger.debug(KonyuRireki.new.to_yaml)
    # @konyu_rireki = KonyuRireki.new.attributes
    @konyu_rireki = KonyuRireki.new
    # logger.debug(@konyu_rireki)

    @konyu_rireki.class_eval("attr_accessor :kokyakuNm, :uketsukeSesakuTantoNm, :byoinNm, :kariAwaseTantoNm, :nohinTantoNm, :mitsumoriTantoEigyoNm, :hinmeiNm")

    # add_columns = {
    #   :kokyakuNm => "",
    #   :uketsukeSesakuTantoNm => "",
    #   :byoinNm => "",
    #   :kariAwaseTantoNm => "",
    #   :nohinTantoNm => "",
    #   :mitsumoriTantoEigyoNm => "",
    #   :hinmeiNm => ""
    # }
    # @konyu_rireki.merge add_columns
    # logger.debug(@konyu_rireki)
    @hoken_shubetsu = HokenShubetsu.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @konyu_rireki }
    end
  end

  # GET /konyu_rirekis/1/edit
  def edit
    logger.debug(params)

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

    @konyu_rireki = KonyuRireki.find(
      params[:id],
      :joins => joins,
      :select => select,
    )

    # # 病院の取得
    # byoin = Byoin.find(@konyu_rireki.byoinCd)
    # @konyu_rireki.byoinNm = byoin.byoinNm

    # # 顧客情報の取得
    # kokyaku = Kokyaku.find(@konyu_rireki.kokyakuId)
    # @konyu_rireki.kokyakuNm = kokyaku.kokyakuNm

    # # 受付制作担当者の取得
    # uketsukeUser = User.find(@konyu_rireki.uketsukeSesakuTantoCd)
    # @konyu_rireki.byoinNm = uketsukeUser.username

    @hoken_shubetsu = HokenShubetsu.all

  end

  # POST /konyu_rirekis
  # POST /konyu_rirekis.json
  def create
    logger.debug(params[:konyu_rireki])
    @konyuRireki = KonyuRireki.new(params[:konyu_rireki])
    # logger.debug(@konyuRireki.to_yaml)

    # 購入履歴IDの最大を取得する
    maxId = KonyuRireki.maximum(:konyuRirekiId);
    if maxId.blank? then
      maxId = 1;
    end
    maxId_s = maxId.to_s
    if maxId_s.size > 9 then
      maxId = maxId_s[(maxId_s.size - 9),9].to_i
    end

    # 購入履歴IDを生成する
    @konyuRireki.konyuRirekiId = "#{get_nend}#{format("%09d",(maxId + 1))}".to_i

    respond_to do |format|
      if @konyuRireki.save
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully created.' }
        format.json { render json: @konyuRireki, status: :created, location: @konyuRireki }
      else
        format.html { render action: "new" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /konyu_rirekis/1
  # PUT /konyu_rirekis/1.json
  def update
    @konyuRireki = KonyuRireki.find(params[:id])

    respond_to do |format|
      if @konyuRireki.update_attributes(params[:konyu_rireki])
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /konyu_rirekis/1
  # DELETE /konyu_rirekis/1.json
  def destroy
    @konyuRireki = KonyuRireki.find(params[:id])
    #@konyuRireki.destroy
    logger.debug(@konyuRireki)
    respond_to do |format|
      if @konyuRireki.update_attribute(:delFlg, 1)
        format.html { redirect_to @konyuRireki, notice: 'KonyuRireki was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  def get_select_stmt
    select = "konyu_rirekis.*"
    select << ",byoins.byoinNm"
    select << ",kokyakus.kokyakuNm"
    select << ",kokyakus.kokyakuNmKana"
    select << ",ust.myoji||' '||ust.name uketsukeSesakuTantoNm"
    select << ",kat.myoji||' '||kat.name kariAwaseTantoNm"
    select << ",nt.myoji||' '||nt.name nohinTantoNm"
    select << ",mt.myoji||' '||mt.name mitsumoriTantoEigyoNm"
    select << ",seihins.hinmeiNm"
    select << ",hs1.hokenShubetsuNm hokenShubetsuNm1"
    select << ",hs2.hokenShubetsuNm hokenShubetsuNm2"
    select << ",CASE shubetsuKn WHEN 0 THEN '新規' WHEN 1 THEN '修理' ELSE NULL END shubetsuKnNm"
    # select << ",CASE shubetsuKn WHEN 0 THEN 'xx' WHEN 1 THEN 'yy' ELSE NULL END shubetsuKnNm"

    joins = ""
    joins << "LEFT OUTER JOIN byoins ON byoins.byoinCd = konyu_rirekis.byoinCd "
    joins << "LEFT OUTER JOIN kokyakus ON kokyakus.kokyakuId = konyu_rirekis.kokyakuId "
    joins << "LEFT OUTER JOIN users ust ON ust.shainCd = konyu_rirekis.uketsukeSesakuTantoCd "
    joins << "LEFT OUTER JOIN users kat ON kat.shainCd = konyu_rirekis.kariAwaseTantoCd "
    joins << "LEFT OUTER JOIN users nt ON nt.shainCd = konyu_rirekis.nohinTantoCd "
    joins << "LEFT OUTER JOIN users mt ON mt.shainCd = konyu_rirekis.mitsumoriTantoEigyoCd "
    joins << "LEFT OUTER JOIN seihins ON seihins.seihinId = konyu_rirekis.seihinCd "
    joins << "LEFT OUTER JOIN hoken_shubetsus hs1 ON hs1.hokenShubetsuCd = konyu_rirekis.hokenShubetsuCd1 "
    joins << "LEFT OUTER JOIN hoken_shubetsus hs2 ON hs2.hokenShubetsuCd = konyu_rirekis.hokenShubetsuCd2 "

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

  private :get_select_stmt

end
