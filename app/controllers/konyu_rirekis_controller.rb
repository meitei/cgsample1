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
    @konyu_rirekis = conditions.find(
      :all,
      :joins => "LEFT OUTER JOIN byoins ON byoins.byoinCd = konyu_rirekis.byoinCd",
      :select => "konyu_rirekis.*, byoins.byoinNm",
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
    @kokyaku = KonyuRireki.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /konyu_rirekis/new
  # GET /konyu_rirekis/new.json
  def new
    @konyu_rireki = KonyuRireki.new
    @hoken_shubetsu = HokenShubetsu.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @konyu_rireki }
    end
  end

  # GET /konyu_rirekis/1/edit
  def edit
    logger.debug(params)
    @kokyaku = KonyuRireki.find(params[:id])
    @shobyo = Shobyo.all
  end

  # POST /konyu_rirekis
  # POST /konyu_rirekis.json
  def create
    logger.debug(params[:kokyaku])
    @kokyaku = KonyuRireki.new(params[:kokyaku])

    respond_to do |format|
      if @kokyaku.save
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully created.' }
        format.json { render json: @kokyaku, status: :created, location: @kokyaku }
      else
        format.html { render action: "new" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /konyu_rirekis/1
  # PUT /konyu_rirekis/1.json
  def update
    @kokyaku = KonyuRireki.find(params[:id])

    respond_to do |format|
      if @kokyaku.update_attributes(params[:kokyaku])
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /konyu_rirekis/1
  # DELETE /konyu_rirekis/1.json
  def destroy
    @kokyaku = KonyuRireki.find(params[:id])
    #@kokyaku.destroy
    logger.debug(@kokyaku)
    respond_to do |format|
      if @kokyaku.update_attribute(:delFlg, 1)
        format.html { redirect_to @kokyaku, notice: 'KonyuRireki was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end
end
