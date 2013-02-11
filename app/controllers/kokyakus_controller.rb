class KokyakusController < ApplicationController
  # GET /kokyakus
  # GET /kokyakus.json
  def index

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /kokyakus/search
  # GET /kokyakus/search.json
  def search
    @records = Kokyaku.count
    @limit = params[:rows].to_i
    @page = params[:page].to_i
    if @records > 0
      n = @records.quo(@limit)
      @total_pages = n.ceil
    else
      @total_pages = 0
    end
    @start = @limit * @page - @limit;
    @kokyakus = Kokyaku.find(:all, :offset => @start, :limit => @limit)

    @responce = {
      total: @total_pages.to_s,
      page: params[:page],
      records: @records.to_s,
      rows: @kokyakus
    }
    #logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /kokyakus/1
  # GET /kokyakus/1.json
  def show
    @kokyaku = Kokyaku.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
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
