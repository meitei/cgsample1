class ByoinsController < ApplicationController
  # GET /byoins
  # GET /byoins.json
  def index
    @byoins = Byoin.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @byoins }
    end
  end

  # GET /byoins/1
  # GET /byoins/1.json
  def show
    @byoin = Byoin.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @byoin }
    end
  end

  # GET /byoins/new
  # GET /byoins/new.json
  def new
    @byoin = Byoin.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @byoin }
    end
  end

  # GET /byoins/1/edit
  def edit
    @byoin = Byoin.find(params[:id])
  end

  # POST /byoins
  # POST /byoins.json
  def create
    @byoin = Byoin.new(params[:byoin])

    respond_to do |format|
      if @byoin.save
        format.html { redirect_to @byoin, notice: 'Byoin was successfully created.' }
        format.json { render json: @byoin, status: :created, location: @byoin }
      else
        format.html { render action: "new" }
        format.json { render json: @byoin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /byoins/1
  # PUT /byoins/1.json
  def update
    @byoin = Byoin.find(params[:id])

    respond_to do |format|
      if @byoin.update_attributes(params[:byoin])
        format.html { redirect_to @byoin, notice: 'Byoin was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @byoin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /byoins/1
  # DELETE /byoins/1.json
  def destroy
    @byoin = Byoin.find(params[:id])
    @byoin.destroy

    respond_to do |format|
      format.html { redirect_to byoins_url }
      format.json { head :no_content }
    end
  end

  # ##############################
  # Search
  # params :
  # byoinCdFrom
  # byoinCdTo
  # byoinNm
  # ##############################
  def search

    #conditions = Byoin.where("\"byoinCd\" NOT ?", nil)
    conditions = Byoin.where("1 = ?", 1)
    conditions = conditions.where("\"byoinCd\" >= ?", params[:byoinCdFrom].to_i) if params[:byoinCdFrom] != ""
    conditions = conditions.where("\"byoinCd\" <= ?", params[:byoinCdTo].to_i) if params[:byoinCdTo] != ""
    conditions = conditions.where("\"byoinNm\" LIKE ?", params[:byoinNm] + "%") if params[:byoinNm] != ""
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
    start = limit * page - limit;
    @byoins = conditions.find(
      :all, 
      :offset => start, 
      :limit => limit,
      :order => "\"byoinCd\" DESC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @byoins
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
