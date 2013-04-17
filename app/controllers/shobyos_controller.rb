class ShobyosController < ApplicationController
  # GET /shobyos
  # GET /shobyos.json
  def index
    @shobyos = Shobyo.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @shobyos }
    end
  end

  # GET /shobyos/1
  # GET /shobyos/1.json
  def show
    @shobyo = Shobyo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @shobyo }
    end
  end

  # GET /shobyos/new
  # GET /shobyos/new.json
  def new
    @shobyo = Shobyo.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @shobyo }
    end
  end

  # GET /shobyos/1/edit
  def edit
    @shobyo = Shobyo.find(params[:id])
  end

  # POST /shobyos
  # POST /shobyos.json
  def create
    @shobyo = Shobyo.new(params[:shobyo])

    respond_to do |format|
      if @shobyo.save
        format.html { redirect_to @shobyo, notice: 'Shobyo was successfully created.' }
        format.json { render json: @shobyo, status: :created, location: @shobyo }
      else
        format.html { render action: "new" }
        format.json { render json: @shobyo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /shobyos/1
  # PUT /shobyos/1.json
  def update
    @shobyo = Shobyo.find(params[:id])

    respond_to do |format|
      if @shobyo.update_attributes(params[:shobyo])
        format.html { redirect_to @shobyo, notice: 'Shobyo was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @shobyo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shobyos/1
  # DELETE /shobyos/1.json
  def destroy
    @shobyo = Shobyo.find(params[:id])
    @shobyo.destroy

    respond_to do |format|
      format.html { redirect_to shobyos_url }
      format.json { head :no_content }
    end
  end

  # ##############################
  # Search
  # params :
  # shobyoNm
  # shobyoNmKana
  # ##############################
  def search

    # 検索条件設定
    conditions = Shobyo.where("1 = ?", 1)
    conditions = conditions.where("\"shobyoNm\" LIKE ?", params[:shobyoNm] + "%") if params[:shobyoNm] != ""
    conditions = conditions.where("\"shobyoNmKana\" LIKE ?", params[:shobyoNmKana] + "%") if params[:shobyoNmKana] != ""
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
    @shobyos = conditions.find(
      :all, 
      :offset => start, 
      :limit => limit,
      :order => "\"shobyoCd\" DESC")

    # 値の格納
    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @shobyos
    }
    logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
