class MitsumorisController < ApplicationController
  # GET /mitsumoris
  # GET /mitsumoris.json
  def index
    @mitsumoris = Mitsumori.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @mitsumoris }
    end
  end

  # GET /mitsumoris/1
  # GET /mitsumoris/1.json
  def show
    @mitsumori = Mitsumori.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @mitsumori }
    end
  end

  # GET /mitsumoris/products
  # GET /mitsumoris/products.json
  def products
    @mitsumori_sehin = MitsumoriSeihin.find(:all, :conditions => ["mitsumoriNo = ?", params[:mitsumoriNo]])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @mitsumori_sehin }
    end
  end

  # GET /mitsumoris/new
  # GET /mitsumoris/new.json
  def new
    @mitsumori = Mitsumori.new

    @konyuRireki = KonyuRireki.find(params[:id])
    @mitsumori.konyuRirekiId = @konyuRireki['konyuRirekiId']
    @mitsumori.kokyakuId = @konyuRireki['kokyakuId']

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @mitsumori }
    end
  end

  # GET /mitsumoris/1/edit
  def edit
    @mitsumori = Mitsumori.find(params[:id])
  end

  # POST /mitsumoris
  # POST /mitsumoris.json
  def create
    logger.debug(params)

    if params[:mitsumoriData].nil? then
      return
    end
    @mitsumori_data = params[:mitsumoriData]
    #logger.debug(@mitsumori_data)
    max_id = Mitsumori.maximum("mitsumoriNo")
    if max_id.nil? then
      max_id = 0
    end
    #logger.debug(max_id)
    @mitsumori_data[:mitsumoriNo] = max_id + 1
    @mitsumori = Mitsumori.new(@mitsumori_data)
    @result = @mitsumori.save

    @products_data = params[:productsData]
    #logger.debug(@products_data)
    @products_data.each do |key, value|
      value[:mitsumoriNo] = max_id + 1
      @seihin = MitsumoriSeihin.new(value)
      @result = @seihin.save
    end

    respond_to do |format|
      if @result
        format.html { redirect_to @mitsumori, notice: 'Mitsumori was successfully created.' }
        format.json { render json: @mitsumori, status: :created, location: @mitsumori }
      else
        format.html { render action: "new" }
        format.json { render json: @mitsumori.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /mitsumoris/1
  # PUT /mitsumoris/1.json
  def update
    #logger.debug(params)
    if params[:mitsumoriData].nil? then
      return
    end
    @mitsumori_data = params[:mitsumoriData]
    @mitsumori = Mitsumori.find(@mitsumori_data[:id])
    @result = @mitsumori.update_attributes(@mitsumori_data)

    MitsumoriSeihin.destroy_all(["mitsumoriNo = ?", @mitsumori_data[:mitsumoriNo]])
    @products_data = params[:productsData]
    #logger.debug(@products_data)
    @products_data.each do |key, value|
      value[:mitsumoriNo] = @mitsumori_data[:mitsumoriNo]
      @seihin = MitsumoriSeihin.new(value)
      @result = @seihin.save
    end
    respond_to do |format|
      if @result
        format.html { redirect_to @mitsumori, notice: 'Mitsumori was successfully updated.' }
        format.json { render json: @mitsumori, status: :created, location: @mitsumori }
      else
        format.html { render action: "edit" }
        format.json { render json: @mitsumori.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mitsumoris/1
  # DELETE /mitsumoris/1.json
  def destroy
    @mitsumori = Mitsumori.find(params[:id])
    @mitsumori.destroy

    respond_to do |format|
      format.html { redirect_to mitsumoris_url }
      format.json { head :no_content }
    end
  end
end
