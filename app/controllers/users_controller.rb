# coding: utf-8

class UsersController < ApplicationController
  skip_before_filter :require_login, :only => [:index, :search, :new, :create]

  def index
    @user = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @user }
    end
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end

  def edit
    @user = User.find(params[:id])
  end
    
  def create  
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        format.html { redirect_to(:users, notice: 'User was successfully created.') }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
    #@user = User.new(params[:user])  
    #if @user.save  
    #  redirect_to root_url, :notice => "Signed up!"  
    #else  
    #  render :new  
    #end  
  end

  # def create_initdata
  #   @user = User.new(params[:user])
  #   if @user.save
  #     redirect_to root_url, :notice => "Signed up!"
  #   else
  #     render :new
  #   end
  # end

  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
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
    conditions = conditions.where("\"shainCd\" = ?", params[:shainCd].to_i) if params[:shainCd] !=""
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
    start = limit * page - limit;
    @users = conditions.find(
      :all,
      :select => "\"id\", 
                       \"shainCd\",
                       \"myoji\",
                       \"name\",
                       \"myojiFuri\",
                       \"nameFuri\",
                       \"username\",
                       \"password\",
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
      rows: @users
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end
end
