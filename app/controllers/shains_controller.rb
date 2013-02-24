class ShainsController < ApplicationController
  # GET /shains
  # GET /shains.json
  def index
    @shains = Shain.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @shains }
    end
  end

  # GET /shains/1
  # GET /shains/1.json
  def show
    @shain = Shain.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @shain }
    end
  end

  # GET /shains/new
  # GET /shains/new.json
  def new
    @shain = Shain.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @shain }
    end
  end

  # GET /shains/1/edit
  def edit
    @shain = Shain.find(params[:id])
  end

  # POST /shains
  # POST /shains.json
  def create
    @shain = Shain.new(params[:shain])

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
    @shain = Shain.find(params[:id])

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
    @shain = Shain.find(params[:id])
    @shain.destroy

    respond_to do |format|
      format.html { redirect_to shains_url }
      format.json { head :no_content }
    end
  end
end
