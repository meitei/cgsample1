# encoding: utf-8
class CommonDataController < ApplicationController

  def kokyaku_list

    has_key = (params[:kokyakuId] != nil and params[:kokyakuId] != "")
    sqlbind_s = "%" + params[:kokyakuId] + "%" if has_key
    sqlbind_i = -1
    sqlbind_i = params[:kokyakuId].to_i if has_key and params[:kokyakuId] =~ /\d+/
    sqlstat = []
    sqlstat << "\"kokyakuId\" = ? "
    sqlstat << "\"kokyakuNm\" LIKE ? "

    conditions = Kokyaku.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_i, sqlbind_s) if has_key
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
    sqlbind_i = -1
    sqlbind_i = params[:byoinCd].to_i if has_key and params[:byoinCd] =~ /\d+/

    sqlstat = []
    sqlstat << "\"byoinCd\" = ? "
    sqlstat << "\"byoinNm\" LIKE ? "

    conditions = Byoin.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_i, sqlbind_s) if has_key
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
    sqlbind_i = -1
    sqlbind_i = params[:seihinId].to_i if has_key and params[:seihinId] =~ /\d+/

    sqlstat = []
    sqlstat << "\"seihinId\" = ? "
    sqlstat << "\"hinmeiNm\" LIKE ? "

    conditions = Seihin.where("1 = ?", 1)
    conditions = conditions.where(sqlstat.join(" OR "), sqlbind_i, sqlbind_s) if has_key
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

end
