class SeihinsController < ApplicationController
  # GET /seihins
  # GET /seihins.json
  def index
    @seihins = Seihin.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @seihins }
    end
  end

  # GET /seihins/1
  # GET /seihins/1.json
  def show
    @seihin = Seihin.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @seihin }
    end
  end

  # GET /seihins/new
  # GET /seihins/new.json
  def new
    @seihin = Seihin.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @seihin }
    end
  end

  # GET /seihins/1/edit
  def edit
    @seihin = Seihin.find(params[:id])
  end

  # POST /seihins
  # POST /seihins.json
  def create
    @seihin = Seihin.new(params[:seihin])

    respond_to do |format|
      if @seihin.save
        format.html { redirect_to @seihin, notice: 'Seihin was successfully created.' }
        format.json { render json: @seihin, status: :created, location: @seihin }
      else
        format.html { render action: "new" }
        format.json { render json: @seihin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /seihins/1
  # PUT /seihins/1.json
  def update
    @seihin = Seihin.find(params[:id])

    respond_to do |format|
      if @seihin.update_attributes(params[:seihin])
        format.html { redirect_to @seihin, notice: 'Seihin was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @seihin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /seihins/1
  # DELETE /seihins/1.json
  def destroy
    @seihin = Seihin.find(params[:id])
    @seihin.destroy

    respond_to do |format|
      format.html { redirect_to seihins_url }
      format.json { head :no_content }
    end
  end
 # ##############################
  # Search
  # params :
  # bunruiCd
  # bunruiNm
  # hinmeiCd
  # hinmeiNm
  # katashikiCd
  # katashikiNm
  # ##############################
  def search

    # 検索条件設定
    conditions = Seihin.where("1 = ?", 1)
    conditions = conditions.where("\"bunruiCd\" = ?", params[:bunruiCd]) if params[:bunruiCd] !=""
    conditions = conditions.where("\"bunruiNm\" LIKE ?", params[:bunruiNm] + "%") if params[:bunruiNm] != ""
    conditions = conditions.where("\"hinmeiCd\" = ?", params[:hinmeiCd]) if params[:hinmeiCd] !=""
    conditions = conditions.where("\"hinmeiNm\" LIKE ?", params[:hinmeiNm] + "%") if params[:hinmeiNm] != ""
    conditions = conditions.where("\"katashikiCd\" = ?", params[:katashikiCd]) if params[:katashikiCd] !=""
    conditions = conditions.where("\"katashikiNm\" LIKE ?", params[:katashikiNm] + "%") if params[:katashikiNm] != ""
    logger.debug(conditions)

    records = conditions.count
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end

    # 検索開始
    start = limit * page - limit;
    @seihins = conditions.find(
      :all,
      :offset => start,
      :limit => limit,
      :order => "\"bunruiCd\"")

    # 値の格納
    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @seihins
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
