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

  # GET /mitsumoris/new
  # GET /mitsumoris/new.json
  def new
    @mitsumori = Mitsumori.new

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
    @mitsumori = Mitsumori.new(params[:mitsumori])

    respond_to do |format|
      if @mitsumori.save
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
    @mitsumori = Mitsumori.find(params[:id])

    respond_to do |format|
      if @mitsumori.update_attributes(params[:mitsumori])
        format.html { redirect_to @mitsumori, notice: 'Mitsumori was successfully updated.' }
        format.json { head :no_content }
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
