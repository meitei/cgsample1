# encoding: utf-8
class CommonDataController < ApplicationController

  def kokyaku_list

    has_key = (params[:kokyakuId] != nil and params[:kokyakuId] != "")
    sqlbind_s = "%" + params[:kokyakuId] + "%" if has_key
    # sqlbind_i = -1
    # sqlbind_i = params[:kokyakuId].to_i if has_key and params[:kokyakuId] =~ /\d+/
    sqlstat = []
    sqlstat << "CAST(\"kokyakuId\" AS text) LIKE ? "
    sqlstat << "\"kokyakuNm1\" || \"kokyakuNm2\" LIKE ? "

    conditions = Kokyaku.where("\"delFlg\" = ?", 0)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_s, sqlbind_s) if has_key
    logger.debug(conditions)

    @kokyakus = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"kokyakuId\" ASC")

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @kokyakus }
    end
  end

  def user_list

    has_key = (params[:shainCd] != nil and params[:shainCd] != "")
    sqlbind_s = "%" + params[:shainCd].gsub(/(\s|　)+/, '') + "%" if has_key

    sqlstat = []
    sqlstat << "\"shainCd\" LIKE ? "
    sqlstat << "\"myoji\" || \"name\" LIKE ? "

    conditions = User.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_s, sqlbind_s) if has_key
    logger.debug(conditions)

    @users = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"shainCd\" ASC")

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @users }
    end
  end

  def byoin_list

    has_key = (params[:byoinCd] != nil and params[:byoinCd] != "")
    sqlbind_s = "%" + params[:byoinCd] + "%" if has_key
    # sqlbind_i = -1
    # sqlbind_i = params[:byoinCd].to_i if has_key and params[:byoinCd] =~ /\d+/

    sqlstat = []
    sqlstat << "CAST(\"byoinCd\" AS text) LIKE ? "
    sqlstat << "\"byoinNm\" LIKE ? "

    conditions = Byoin.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_s, sqlbind_s) if has_key
    logger.debug(conditions)

    @byoins = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"byoinCd\" ASC")

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @byoins }
    end
  end

  def seihin_list

    has_key = (params[:seihinId] != nil and params[:seihinId] != "")
    sqlbind_s = "%" + params[:seihinId] + "%" if has_key
    # sqlbind_i = -1
    # sqlbind_i = params[:seihinId].to_i if has_key and params[:seihinId] =~ /\d+/

    sqlstat = []
    sqlstat << "CAST(\"seihinId\" AS text) LIKE ? "
    sqlstat << "\"hinmeiNm\" LIKE ? "

    conditions = Seihin.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_s, sqlbind_s) if has_key
    logger.debug(conditions)

    @seihins = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"seihinId\" ASC")

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @seihins }
    end
  end

  def shobyo_list

    has_key = (params[:shobyoCd] != nil and params[:shobyoCd] != "")
    sqlbind_s = "%" + params[:shobyoCd] + "%" if has_key
    # sqlbind_i = -1
    # sqlbind_i = params[:shobyoCd].to_i if has_key and params[:shobyoCd] =~ /\d+/

    sqlstat = []
    sqlstat << "CAST(\"shobyoCd\" AS text) LIKE ? "
    sqlstat << "\"shobyoNm\" LIKE ? "

    conditions = Shobyo.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_s, sqlbind_s) if has_key
    logger.debug(conditions)

    @shobyos = conditions.find(
      :all,
      :limit => 1000,
      :order => "\"shobyoCd\" ASC")

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @shobyos }
    end
  end

  def str_sql_concat *strs
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "mysql2" then
      "concat(#{strs.join(',')})"
    else
      strs.join("||")
    end
  end

  private :str_sql_concat

end
