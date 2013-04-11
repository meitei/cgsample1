# coding: utf-8

class ShainsController < ApplicationController
  skip_before_filter :require_login, :only => [:index, :search, :new, :create]
  # GET /shains
  # GET /shains.json
  def index
    @shains = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @shains }
    end
  end

  # GET /shains/1
  # GET /shains/1.json
  def show
    @shain = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @shain }
    end
  end

  # GET /shains/new
  # GET /shains/new.json
  def new
    @shain = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @shain }
    end
  end

  # GET /shains/1/edit
  def edit
    @shain = User.find(params[:id])
  end

  # POST /shains
  # POST /shains.json
  def create
    @shain = User.new(params[:shain])

    respond_to do |format|
      if @shain.save
        format.html { redirect_to @shain, notice: 'Shain was successfully created.' }
        format.json { render json: @shain, status: :created, location: @shain }
      else
        format.html { render action: "new" }
        format.json { render json: @shain.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /shains/1
  # PUT /shains/1.json
  def update
    @shain = User.find(params[:id])

    respond_to do |format|
      if @shain.update_attributes(params[:shain])
        format.html { redirect_to @shain, notice: 'Shain was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @shain.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shains/1
  # DELETE /shains/1.json
  def destroy
    @shain = User.find(params[:id])
    @shain.destroy

    respond_to do |format|
      format.html { redirect_to shains_url }
      format.json { head :no_content }
    end
  end

  # ##############################
  # Search
  # params :
  # shainCd
  # myoji
  # name
  # myojiFuri
  # nameFuri
  # ##############################
  def search

    # 検索条件設定
    conditions = User.where("1 = ?", 1)
    conditions = conditions.where("\"shainCd\" = ?", params[:shainCd]) if params[:shainCd] !=""
    conditions = conditions.where("\"myoji\" LIKE ?", params[:myoji] + "%") if params[:myoji] != ""
    conditions = conditions.where("\"name\" LIKE ?", params[:name] + "%") if params[:name] != ""
    conditions = conditions.where("\"myojiFuri\" LIKE ?", params[:myojiFuri] + "%") if params[:myojiFuri] != ""
    conditions = conditions.where("\"nameFuri\" LIKE ?", params[:nameFuri] + "%") if params[:nameFuri] != ""

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
    # 項目が存在しないため、保留。 \"password\",
    start = limit * page - limit;
    @shains = conditions.find(
      :all,
      :select =>       "id,
                       \"shainCd\",
                       \"myoji\",
                       \"name\",
                       \"myojiFuri\",
                       \"nameFuri\",
                       \"username\",
                       \"manageFlg\",
                       CASE \"manageFlg\"
                           WHEN '0' THEN '一般'
                           WHEN '1' THEN '管理者'
                           WHEN '9' THEN '退職者'
                       END AS \"manageName\"",
      :offset => start,
      :limit => limit,
      :order => "\"shainCd\"")

    # 値の格納
    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @shains
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

end
