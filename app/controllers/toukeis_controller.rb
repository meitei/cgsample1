class ToukeisController < ApplicationController

  SumUnts = Struct.new(:keyCd, :keyLabel, :joins)

  # GET /toukeis
  # GET /toukeiss.json
  def index
    respond_to do |format|
      format.html # index.html.erb
      #format.json { render json: @responce }
    end
  end

  # GET /toukeis/search
  # GET /toukeis/search.json
  def search

    conditions = KonyuRireki.where("1 = ?", 1)
    conditions = conditions.where("\"mitsumoriDt\" >= ?", Date.strptime(params[:targetSpnFrom], "%Y/%m/%d")) if params[:targetSpnFrom] != ""
    conditions = conditions.where("\"mitsumoriDt\" <= ?", Date.strptime(params[:targetSpnTo], "%Y/%m/%d")) if params[:targetSpnTo] != ""
    logger.debug(conditions)

    # Pending...
    sumUnts = {
      1 => SumUnts.new(
        "uketsukeSesakuTantoCd",
        "shains.name",
        "left outer join shains on shains.shainCd = konyu_rirekis.uketsukeSesakuTantoCd")
    }
    sumUnts.default = sumUnts[1]
    sumUnt = sumUnts[params[:sumUnt].to_i];

    # sumUnts = {
    #   1 => "uketsukeSesakuTantoCd",
    #   2 => "byoinCd",
    #   3 => "shohinNm",
    #   4 => "shubetsuCd",
    #   5 => "mitsumoriKomokuCd"
    # }

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
      :select => "#{sumUnt.keyCd} sumUntKey, #{sumUnt.keyLabel} sumUnt, sum(kin) kingaku, count(*) daisu ",
      :joins => sumUnt.joins,
      :group  => "sumUntKey ",
      :offset => start,
      :limit  => limit,
      :order  => "\"sumUntKey\" ASC")

    # @konyu_rirekis.each {|row|
    #   row["sumUnt"] = row.sesaku_shain.name
    # }

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

  def kokyaku_list
    #--- 未実装 ---

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
      :order => "\"kokyakuId\" DESC")

    # responce = []
    # @kokyakus.each {|k|
    #   responce << (k.kokyakuId + ":" + k.kokyakuNm)
    # }

    @responce = {
      list: @kokyakus
    }

    logger.debug(@responce)

    respond_to do |format|
      format.html  { render :nothing => true }
      format.json { render json: @responce }
    end
  end


  # GET /toukeis/graph
  # GET /toukeis/graph.json
  def graph
    # @kokyaku = Kokyaku.find(params[:id])

    respond_to do |format|
      format.html # graph.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /kokyakus/new
  # GET /kokyakus/new.json
  def new
    @kokyaku = Kokyaku.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @kokyaku }
    end
  end

  # GET /kokyakus/1/edit
  def edit
    @kokyaku = Kokyaku.find(params[:id])
  end

  # POST /kokyakus
  # POST /kokyakus.json
  def create
    logger.debug(params)
    @kokyaku = Kokyaku.new(params[:kokyaku])

    respond_to do |format|
      if @kokyaku.save
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully created.' }
        format.json { render json: @kokyaku, status: :created, location: @kokyaku }
      else
        format.html { render action: "new" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /kokyakus/1
  # PUT /kokyakus/1.json
  def update
    @kokyaku = Kokyaku.find(params[:id])

    respond_to do |format|
      if @kokyaku.update_attributes(params[:kokyaku])
        format.html { redirect_to @kokyaku, notice: 'Kokyaku was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @kokyaku.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kokyakus/1
  # DELETE /kokyakus/1.json
  def destroy
    @kokyaku = Kokyaku.find(params[:id])
    @kokyaku.destroy

    respond_to do |format|
      format.html { redirect_to kokyakus_url }
      format.json { head :no_content }
    end
  end
end
