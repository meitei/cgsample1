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

  # def report

  #   # (B) ThinReportレイアウトのテンプレートの場所を指定する
  #   templateDir = File.join(Rails.root, 'app', 'reports')
  #   report = ThinReports::Report.new :layout => File.join(templateDir,'hello_world')

  #   # (C) 1ページ目
  #   report.start_new_page

  #   report.page.item(:world).value('ThinReports')
  #   report.page.item(:world_ja).value('report_solution')

  #   # (D) 2ページ目
  #   report.start_new_page do |page|
  #     page.item(:world).value('Ruby').style(:color, '#ff0000')
  #     page.item(:hello).style(:color, '#ff0000')
  #     page.item(:world_ja).value('おらおら')
  #   end

  #   # (E) 3ページ目
  #   report.start_new_page do
  #     item(:world).value('Hello')
  #     item(:hello).hide
  #   end

  #   # (F) 4ページ目
  #   report.start_new_page do
  #     values(:world    => 'ThinReports', 
  #            :world_ja => 'report_solution')
  #   end

  #   # 保存先
  #   saveDir = File.join(Rails.root, "public", "tmp")

  #   # tmp内のファイルを削除する
  #   files = Dir.glob(File.join(saveDir,"*.pdf"))
  #   files.each do |file|
  #       fileDate = File.basename(file)[0..7] 
  #       # 保存日数を指定する          (※とりあえず全部削除する)
  #       delDate = (Date.today).strftime("%Y%m%d")
  #       if fileDate <= delDate
  #         File.delete(file)
  #       end
  #   end

  #   # ディレクトリの作成
  #   if !File.exists?(saveDir)
  #       Dir.mkdir(saveDir)
  #   end

  #   fileName = Time.now.strftime("%Y%m%d%H%M%S") + "_hello_world.pdf"

  #   # (G)ファイル保存
  #   report.generate_file(File.join(saveDir,fileName))

  #   # http://serverName/tmp/fileName.pdf で読み込まれるようにする
  #   fileInfo = {'fileName' =>"tmp/" + fileName}

  #  # render :json => fileInfo
  #   respond_to do |format|
  #     format.html
  #     format.json { render json: fileInfo }
  #   end
  # end

  def report

    # (B) ThinReportレイアウトのテンプレートの場所を指定する
    templateDir = File.join(Rails.root, 'app', 'reports')
    report = ThinReports::Report.new :layout => File.join(templateDir,'Quotation_1')

    # (E) 1ページ目
    report.start_new_page do
      item(:year).value('24')
      item(:month).value('04')
      item(:day).value('01')

      item(:name1).value('株式会社 ○○○○')
      item(:charge).value('\ ' + 987654321.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse)
      item(:name2).value('○○ ○○○')
      item(:model).value('○○○○○')
      item(:name3).value('○○ ○○○')

      subtotal = 50000000
      strSubtotal = subtotal.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
      item(:subtotal).value(strSubtotal)
      
      # TODO:消費税計算の端数処理を行う(切り上げ/切り捨て/四捨五入?)
      # ひとまず切り捨てにしておく
      taxrate = 0.05
      tax = (subtotal * taxrate).truncate
      strTax = tax.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
      item(:tax).value(strTax)

      total = subtotal + tax
      strTotal = total.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
      item(:total).value(strTotal)

      item(:saikei_1_1).value('7,654,321')
      item(:saisun_1_1).value('7,654,321')
      item(:suryo_1_1).value('321')
      item(:kingaku_1_1).value('87,654,321')

      item(:tanka_2_1).value('7,654,321')
      item(:suryo_2_1).value('321')
      item(:kingaku_2_1).value('87,654,321')

      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
      # item(:).value('')


      
    end

    # 保存先
    saveDir = File.join(Rails.root, "public", "tmp")

    # tmp内のファイルを削除する
    files = Dir.glob(File.join(saveDir,"*.pdf"))
    files.each do |file|
        fileDate = File.basename(file)[0..7] 
        # 保存日数を指定する          (※とりあえず全部削除する)
        delDate = (Date.today).strftime("%Y%m%d")
        if fileDate <= delDate
          File.delete(file)
        end
    end

    # ディレクトリの作成
    if !File.exists?(saveDir)
        Dir.mkdir(saveDir)
    end

    fileName = Time.now.strftime("%Y%m%d%H%M%S") + "_Quotation.pdf"

    # (G)ファイル保存
    report.generate_file(File.join(saveDir,fileName))

    # http://serverName/tmp/fileName.pdf で読み込まれるようにする
    fileInfo = {'fileName' =>"tmp/" + fileName}

   # render :json => fileInfo
    respond_to do |format|
      format.html
      format.json { render json: fileInfo }
    end
  end

end
