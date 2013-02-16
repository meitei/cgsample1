class HokenShubetsusController < ApplicationController
  # GET /hoken_shubetsus
  # GET /hoken_shubetsus.json
  def index
    @hoken_shubetsus = HokenShubetsu.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @hoken_shubetsus }
    end
  end

  # GET /hoken_shubetsus/1
  # GET /hoken_shubetsus/1.json
  def show
    @hoken_shubetsu = HokenShubetsu.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @hoken_shubetsu }
    end
  end

  # GET /hoken_shubetsus/new
  # GET /hoken_shubetsus/new.json
  def new
    @hoken_shubetsu = HokenShubetsu.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @hoken_shubetsu }
    end
  end

  # GET /hoken_shubetsus/1/edit
  def edit
    @hoken_shubetsu = HokenShubetsu.find(params[:id])
  end

  # POST /hoken_shubetsus
  # POST /hoken_shubetsus.json
  def create
    @hoken_shubetsu = HokenShubetsu.new(params[:hoken_shubetsu])

    respond_to do |format|
      if @hoken_shubetsu.save
        format.html { redirect_to @hoken_shubetsu, notice: 'Hoken shubetsu was successfully created.' }
        format.json { render json: @hoken_shubetsu, status: :created, location: @hoken_shubetsu }
      else
        format.html { render action: "new" }
        format.json { render json: @hoken_shubetsu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /hoken_shubetsus/1
  # PUT /hoken_shubetsus/1.json
  def update
    @hoken_shubetsu = HokenShubetsu.find(params[:id])

    respond_to do |format|
      if @hoken_shubetsu.update_attributes(params[:hoken_shubetsu])
        format.html { redirect_to @hoken_shubetsu, notice: 'Hoken shubetsu was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @hoken_shubetsu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hoken_shubetsus/1
  # DELETE /hoken_shubetsus/1.json
  def destroy
    @hoken_shubetsu = HokenShubetsu.find(params[:id])
    @hoken_shubetsu.destroy

    respond_to do |format|
      format.html { redirect_to hoken_shubetsus_url }
      format.json { head :no_content }
    end
  end

  # ##############################
  # Search
  # params :
  # hokenShubetsuCdFrom
  # hokenShubetsuCdTo
  # hokenShubetsuNm
  # ##############################
  def search

    conditions =  HokenShubetsu.where("1 = ?", 1)
    conditions = conditions.where("\"hokenShubetsuCd\" >= ?", params[:hokenShubetsuCdFrom].to_i) if params[:hokenShubetsuCdFrom] != ""
    conditions = conditions.where("\"hokenShubetsuCd\" <= ?", params[:hokenShubetsuCdTo].to_i) if params[:hokenShubetsuCdTo] != ""
    conditions = conditions.where("\"hokenShubetsuNm\" LIKE ?", params[:hokenShubetsuNm] + "%") if params[:hokenShubetsuNm] != ""
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
    @hoken_shubetsus = conditions.find(
      :all, 
      :offset => start, 
      :limit => limit,
      :order => "\"hokenShubetsuCd\" DESC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @hoken_shubetsus
    }

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
