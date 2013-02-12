# coding: utf-8
require 'thinreports'
require 'time'
require "date"

class ItemsController < ApplicationController
  # GET /items
  # GET /items.json
  def index
    @items = Item.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @items }
    end
  end

  # GET /items/1
  # GET /items/1.json
  def show
    @item = Item.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @item }
    end
  end

  # GET /items/new
  # GET /items/new.json
  def new
    @item = Item.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @item }
    end
  end

  # GET /items/1/edit
  def edit
    @item = Item.find(params[:id])
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(params[:item])

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render json: @item, status: :created, location: @item }
      else
        format.html { render action: "new" }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /items/1
  # PUT /items/1.json
  def update
    @item = Item.find(params[:id])

    respond_to do |format|
      if @item.update_attributes(params[:item])
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    respond_to do |format|
      format.html { redirect_to items_url }
      format.json { head :no_content }
    end
  end

  def report

    # (B)
    report = ThinReports::Report.new :layout => File.join(Rails.root,'app', 'reports', 'hello_world')

    # (C) 1ページ目
    report.start_new_page

    report.page.item(:world).value('ThinReports')
    report.page.item(:world_ja).value('report_solution')

    # (D) 2ページ目
    report.start_new_page do |page|
      page.item(:world).value('Ruby').style(:color, '#ff0000')
      page.item(:hello).style(:color, '#ff0000')
      page.item(:world_ja).value('おらおら')
    end

    # (E) 3ページ目
    report.start_new_page do
      item(:world).value('Hello')
      item(:hello).hide
    end

    # (F) 4ページ目
    report.start_new_page do
      values(:world    => 'ThinReports', 
             :world_ja => 'report_solution')
    end

    fileName = Time.now.strftime("%Y%m%d%H%S") + "_hello_world"

    # (G)
    report.generate_file(File.join(Rails.root,'app', 'reports', 'tmp', fileName))

    # @items = Item.all
    fileInfo = {'fileName' => fileName}
   # render :json => fileInfo
    respond_to do |format|
      format.html
      format.json { render json: fileInfo }
    end
  end

end
