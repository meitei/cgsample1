class KanseiBuhinsController < ApplicationController
  # GET /kansei_buhins
  # GET /kansei_buhins.json
  def index
    @kansei_buhins = KanseiBuhin.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @kansei_buhins }
    end
  end

  # GET /kansei_buhins/1
  # GET /kansei_buhins/1.json
  def show
    @kansei_buhin = KanseiBuhin.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @kansei_buhin }
    end
  end

  # GET /kansei_buhins/new
  # GET /kansei_buhins/new.json
  def new
    @kansei_buhin = KanseiBuhin.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @kansei_buhin }
    end
  end

  # GET /kansei_buhins/1/edit
  def edit
    @kansei_buhin = KanseiBuhin.find(params[:id])
  end

  # POST /kansei_buhins
  # POST /kansei_buhins.json
  def create
    @kansei_buhin = KanseiBuhin.new(params[:kansei_buhin])

    respond_to do |format|
      if @kansei_buhin.save
        format.html { redirect_to @kansei_buhin, notice: 'Kansei buhin was successfully created.' }
        format.json { render json: @kansei_buhin, status: :created, location: @kansei_buhin }
      else
        format.html { render action: "new" }
        format.json { render json: @kansei_buhin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /kansei_buhins/1
  # PUT /kansei_buhins/1.json
  def update
    @kansei_buhin = KanseiBuhin.find(params[:id])

    respond_to do |format|
      if @kansei_buhin.update_attributes(params[:kansei_buhin])
        format.html { redirect_to @kansei_buhin, notice: 'Kansei buhin was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kansei_buhin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kansei_buhins/1
  # DELETE /kansei_buhins/1.json
  def destroy
    @kansei_buhin = KanseiBuhin.find(params[:id])
    @kansei_buhin.destroy

    respond_to do |format|
      format.html { redirect_to kansei_buhins_url }
      format.json { head :no_content }
    end
  end

  # ##############################
  # Search
  # params :
  # buhinNm
  # katashikiCdFrom
  # katashikiCdTo
  # katashikiNm
  # ##############################
  def search

    # 検索条件設定
    conditions = KanseiBuhin.where("1 = ?", 1)
    conditions = conditions.where("\"buhinNm\" LIKE ?", params[:buhinNm] + "%") if params[:buhinNm] != ""
    conditions = conditions.where("\"katashikiCd\" >= ?", params[:katashikiCdFrom].to_i) if params[:katashikiCdFrom] != ""
    conditions = conditions.where("\"katashikiCd\" <= ?", params[:katashikiCdTo].to_i) if params[:katashikiCdTo] != ""
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
    @kanseiBuhins = conditions.find(
      :all,
      :offset => start,
      :limit => limit,
      :order => "\"buhinCd\"")

    # 値の格納
    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @kanseiBuhins
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
