# coding: utf-8
require 'thinreports'
require 'time'
require 'date'
require 'RMagick'
require 'open-uri'

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

    # attr_accessible :seihinNo, :seihinName, :tanka, :tax, :torokushaId, :koshinshaId
    @mitsumoriTankas = MitsumoriTanka.all

    # @mitsumoriTankas.each {|row| 
    #   if row["seihinNo"] == 1
    #     # logger.debug(row["tanka"])

    #     # データからMagick::Imageに変換
    #     image = Magick::Image.from_blob(row["image"]).first
    #     # ファイルに保存
    #     image.write(File.join(tmpDir, imageName))
    #   end
    # }

    # ThinReportレイアウトのテンプレートの場所を指定する
    templateDir = File.join(Rails.root, 'app', 'reports')

    # 各ページで使用するテンプレートファイルを指定
    report = ThinReports::Report.new
    report.use_layout File.join(templateDir, 'Quotation_1'), :id => :first
    report.use_layout File.join(templateDir, 'Quotation_2'), :id => :second

    # 1ページ目
    report.start_new_page :layout => :first do

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
      
      # 消費税計算の端数処理(小数部切り捨て)
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
      item(:kin_1_1).value('87,654,321')

      item(:tanka_2_1).value('7,654,321')
      item(:suryo_2_1).value('321')
      item(:kin_2_1).value('87,654,321')

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

    # 2ページ目
    report.start_new_page :layout => :second do

      item(:tanka_3_1).value('7,654,321')
      item(:suryo_3_1).value('321')
      item(:kin_3_1).value('87,654,321')

      item(:shurui_4_1).value('完成用部品　車椅子フレーム　リクライニング・ティルト式手押し型')
      item(:tanka_4_1).value('7,654,321')
      item(:suryo_4_1).value('321')
      item(:kin_4_1).value('87,654,321')

      # item(:).value('')
      # item(:).value('')
      # item(:).value('')
    end

    # 保存先
    tmpDir = File.join(Rails.root, "app", 'reports', "tmp")
    # ディレクトリの作成
    if !File.exists?(tmpDir)
        Dir.mkdir(tmpDir)
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

    fileName = "Quotation_" + Time.now.strftime("%Y%m%d%H%M%S") + ".pdf"

    # ファイル保存
    report.generate_file(File.join(saveDir,fileName))

    # http://serverName/tmp/fileName.pdf で読み込まれるようにする
    fileInfo = {'fileName' =>"tmp/" + fileName}

   # render :json => fileInfo
    respond_to do |format|
      format.html
      format.json { render json: fileInfo }
    end
  end

  def report2

    # ThinReportレイアウトのテンプレートの場所を指定する
    templateDir = File.join(Rails.root, 'app', 'reports')

    # 各ページで使用するテンプレートファイルを指定
    report = ThinReports::Report.new
    report.use_layout File.join(templateDir, 'Image_Sample'), :id => :image

    # 保存先
    tmpDir = File.join(Rails.root, "app", 'reports', "tmp")
    # ディレクトリの作成
    if !File.exists?(tmpDir)
        Dir.mkdir(tmpDir)
    end

    # 1ページ目
    report.start_new_page :layout => :image do

      @tests = {
        "mainImage1" => "main1.jpg",
        "mainImage2" => "main2.png",
        "subImage1" => "sub1.png",
        "subImage2" => "sub2.png",
        "subImage3" => "sub3.png",
        "subImage4" => "sub4.png"
      }

      @testImage = TestImage.find(:first, :conditions => { :mitsumoriNo => 1 })

      @tests.each {|key, name|
        @testImage = TestImage.find(:first, :conditions => { :mitsumoriNo => 1 })

        # データからMagick::Imageに変換
        image = Magick::Image.from_blob(@testImage[key]).first
        # ファイルに保存
        image.write(File.join(tmpDir, name))

        # id = name[0..name.index('.')-1]
        item(key).src(File.join(tmpDir, name))
      }

      # item(:main).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )
      # item(:main2).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )
      # item(:sub1).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )
      # item(:sub2).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )
      # item(:sub3).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )
      # item(:sub4).value( open('http://blog-imgs-52-origin.fc2.com/s/o/k/sokuhoushimasu/94530522.png') )

      # item(:main).value( open('http://localhost:3000/images/foot.png') )
      # item(:main).value( open('http://localhost:3000/items/display') )
      # item(:main).value( open('http://localhost:3000/items/display') )

      # # GoogleChart Sample
      # params = ['cht=lc','chs=240x140','chd=t:40,60,60,45,47,75,70,72']
      # item(:main).value(open('http://chart.googleapis.com/chart?' + URI.encode(params.join('&'))))

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

    fileName = "ImageSample_" + Time.now.strftime("%Y%m%d%H%M%S") + ".pdf"

    # ファイル保存
    report.generate_file(File.join(saveDir,fileName))

    # http://serverName/tmp/fileName.pdf で読み込まれるようにする
    fileInfo = {'fileName' =>"tmp/" + fileName}

   # render :json => fileInfo
    respond_to do |format|
      format.html
      format.json { render json: fileInfo }
    end
  end

  def display

      @testImage = TestImage.find(:first, :conditions => { :mitsumoriNo => 1 })

      send_data @testImage["subImage4"]
  end


end
