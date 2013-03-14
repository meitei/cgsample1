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
    conditions = KonyuRireki.where("delFlg = ?", 0)
    conditions = conditions.where("\"kokyakuId\" >= ?", params[:kokyaku][:kokyakuIdFrom].to_i) if params[:kokyaku][:kokyakuIdFrom] != ""
    conditions = conditions.where("\"kokyakuId\" <= ?", params[:kokyaku][:kokyakuIdTo].to_i) if params[:kokyaku][:kokyakuIdTo] != ""
    conditions = conditions.where("\"kokyakuNm\" LIKE ?", params[:kokyaku][:kokyakuNm] + "%") if params[:kokyaku][:kokyakuNm] != ""
    conditions = conditions.where("\"kokyakuNmKana\" LIKE ?", params[:kokyaku][:kokyakuNmKana] + "%") if params[:kokyaku][:kokyakuNmKana] != ""
    conditions = conditions.where("\"seibetsu\" = ?", params[:kokyaku][:seibetsu]) if params[:kokyaku][:seibetsu] != ""
    conditions = conditions.where("\"tanjoDt\" >= ?", params[:kokyaku][:tanjoDtFrom]) if params[:kokyaku][:tanjoDtFrom] != ""
    conditions = conditions.where("\"tanjoDt\" <= ?", params[:kokyaku][:tanjoDtTo]) if params[:kokyaku][:tanjoDtTo] != ""
    conditions = conditions.where("\"postNo\" LIKE ?", params[:kokyaku][:postNo] + "%") if params[:kokyaku][:postNo] != ""
    conditions = conditions.where("address1 LIKE ?", params[:kokyaku][:address1] + "%") if params[:kokyaku][:address1] != ""
    conditions = conditions.where("address2 LIKE ?", "%" + params[:kokyaku][:address2] + "%") if params[:kokyaku][:address2] != ""
    conditions = conditions.where("tel1 LIKE ?", params[:kokyaku][:tel1] + "%") if params[:kokyaku][:tel1] != ""
    conditions = conditions.where("tel2 LIKE ?", params[:kokyaku][:tel2] + "%") if params[:kokyaku][:tel2] != ""
    conditions = conditions.where("fax LIKE ?", params[:kokyaku][:fax] + "%") if params[:kokyaku][:fax] != ""
    conditions = conditions.where("\"shobyoNm\" LIKE ?", params[:kokyaku][:shobyoNm] + "%") if params[:kokyaku][:shobyoNm] != ""
    conditions = conditions.where("\"gakkoNm\" LIKE ?", params[:kokyaku][:gakkoNm] + "%") if params[:kokyaku][:gakkoNm] != ""
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
      :joins => "LEFT OUTER JOIN shobyos ON shobyos.shobyoCd = konyu_rirekis.shobyouCd1",
      # :joins => "LEFT OUTER JOIN shobyos shobyo2 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd2",
      # :joins => "LEFT OUTER JOIN shobyos shobyo3 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd3",
      # :include => [:shobyo],
      :offset => start,
      :limit => limit,
      :order => "\"kokyakuId\" DESC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @konyu_rirekis
    }
    #logger.debug(@responce)

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
    @kokyaku = KonyuRireki.new
    @shobyo = Shobyo.all

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @kokyaku }
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
