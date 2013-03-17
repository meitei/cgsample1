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

  # TODO:製品Noをパラメータで受け取る。
  def report
    ###########################
    # 1列目
    ###########################
    # report header
    @@headers1 = ['tanka','suryo','kin']

    # 'seihinNo',line'
    @@hash1 = {
      55 => 1,
      66 => 1,
      88 => 2,
      32 => 3,
      41 => 3,
      43 => 4,
      53 => 4,
      73 => 5,
      56 => 6,
      89 => 7,
      70 => 8,
      33 => 9,
      39 => 10,
      42 => 10,
      37 => 11,
      44 => 12,
      51 => 13,
      54 => 13,
      49 => 14,
      74 => 15,
      80 => 16,
      57 => 18,
      75 => 20,
      81 => 21,
      2 => 22,
      78 => 23,
      86 => 24,
      3 => 25,
      1 => 28,
      4 => 29,
      93 => 31,
      95 => 32,
      71 => 33,
      107 => 34,
      108 => 35,
      109 => 36,
      110 => 37,
      111 => 38,
      92 => 39,
      112 => 40,
      113 => 41,
      114 => 42,
      115 => 43,
      116 => 44,
      117 => 45,
      118 => 46,
      119 => 47,
      120 => 48,
      96 => 49,
      97 => 50,
      98 => 51,
      99 => 52,
      100 => 53,
      101 => 54,
      102 => 55
    }

    ###########################
    # 2列目
    ###########################
    # report header
    @@headers2 = ['tanka','suryo','kin']

    # 'seihinNo',line'
    @@hash2 = {
      103 => 1,
      104 => 2,
      105 => 3,
      58 => 4,
      90 => 5,
      34 => 6,
      40 => 7,
      38 => 8,
      45 => 9,
      52 => 10,
      50 => 11,
      76 => 12,
      82 => 13,
      35 => 14,
      46 => 14,
      59 => 14,
      77 => 14,
      83 => 14,
      91 => 14,
      79 => 15,
      94 => 16,
      5 => 23,
      6 => 24,
      31 => 25,
      143 => 26,
      63 => 28,
      36 => 29,
      47 => 30,
      84 => 31,
      67 => 32,
      64 => 33,
      48 => 34,
      85 => 35,
      65 => 36,
      68 => 37,
      72 => 43,
      87 => 44
    }

    ###########################
    # 3列目
    ###########################
    # report header
    @@headers3 = ['tanka','suryo','kin']

    # 'seihinNo',line'
    @@hash3 = {
      62 => 1,
      69 => 2,
      60 => 4,
      61 => 5,
      13 => 7,
      14 => 8,
      15 => 9,
      16 => 10,
      17 => 11,
      18 => 12,
      106 => 14,
      7 => 16,
      8 => 17,
      9 => 18,
      128 => 19,
      129 => 20,
      130 => 21,
      131 => 22,
      10 => 23,
      132 => 24,
      11 => 25,
      12 => 26,
      124 => 27,
      133 => 27,
      144 => 27,
      134 => 28,
      121 => 29,
      145 => 29,
      122 => 30,
      141 => 30,
      123 => 31,
      142 => 31,
      135 => 32,
      136 => 33,
      125 => 34,
      137 => 34,
      126 => 35,
      127 => 36,
      138 => 36,
      139 => 37,
      140 => 38
    }

    ###########################
    # 4列目
    ###########################
    # report header
    @@headers4 = ['seihinName','tanka','suryo','kin']

    # TODO:本当は完成部品から…
    # 'seihinNo',line'
    @@hash4 = {
      19 => 1,
      20 => 2,
      21 => 3,
      22 => 4,
      23 => 5,
      24 => 6,
      25 => 7,
      26 => 8,
      27 => 9,
      28 => 10,
      29 => 11,
      30 => 12,
      152 => 13,
      153 => 13,
      146 => 14,
      147 => 14,
      148 => 14,
      154 => 15,
      149 => 16,
      150 => 16,
      151 => 16,
      155 => 17,
      156 => 17,
      157 => 17,
      158 => 18,
      159 => 18,
      160 => 19,
      161 => 19,
      162 => 20,
      163 => 20,
      164 => 21,
      165 => 21,
      166 => 22,
      167 => 22,
      168 => 23,
      169 => 23,
      170 => 24,
      171 => 24,
      172 => 25,
      173 => 26,
      174 => 26
    }

    @@mitsumoriTankas = MitsumoriTanka.all
    @@mitsumoriSeihins = MitsumoriSeihin.find(:all, :conditions => { :mitsumoriNo => 1 })


    # ThinReportレイアウトのテンプレートの場所を指定する
    templateDir = File.join(Rails.root, 'app', 'reports')

    # 各ページで使用するテンプレートファイルを指定
    report = ThinReports::Report.new
    report.use_layout File.join(templateDir, 'Quotation_1'), :id => :first
    report.use_layout File.join(templateDir, 'Quotation_2'), :id => :second

    # 1ページ目
    report.start_new_page :layout => :first do

      t = Time.now
      strDate = "平成" + (t.strftime("%y").to_i + 12).to_s + t.strftime("年%m月%d日")
      item(:date).value(strDate)

      item(:name1).value('株式会社 ○○○○')
      item(:name2).value('○○ ○○○')
      item(:model).value('○○○○○')
      item(:name3).value('○○ ○○○')

      ###########################
      # 明細行
      ###########################
      @@mitsumoriTankas.each {|row|
        # 1列目の処理
        if @@hash1.key?(row["seihinNo"])
          line = @@hash1[row["seihinNo"]]

          @@headers1.each {|header|
            if header == 'tanka'
              id = 'saisun' + '_1_' + line.to_s
            else
              id = header + '_1_' + line.to_s
            end
            item(id).value(number_format(row[header]))
          }
        end

        # 2列目の処理
        if @@hash2.key?(row["seihinNo"])
          line = @@hash2[row["seihinNo"]]

          @@headers2.each {|header|
            id = header + '_2_' + line.to_s
            item(id).value(number_format(row[header]))
          }
        end
      }

      subtotal = 0
      tax = 0
      total = 0
      @@mitsumoriSeihins.each {|row|
        # 1列目の処理
        if @@hash1.key?(row["seihinNo"])
          line = @@hash1[row["seihinNo"]]

          @@headers1.each {|header|
            if header == 'tanka'
              id = 'saisun' + '_1_' + line.to_s
            else
              id = header + '_1_' + line.to_s
            end
            item(id).value(number_format(row[header]))
          }
        end

        # 2列目の処理
        if @@hash2.key?(row["seihinNo"])
          line = @@hash2[row["seihinNo"]]

          @@headers2.each {|header|
            id = header + '_2_' + line.to_s
            item(id).value(number_format(row[header]))
          }
        end

        # 集計
        subtotal += row["tanka"] * row["suryo"]
        tax += row["tax"]
        total += row["kin"]
      }

      ###########################
      # 集計項目
      ###########################
      item(:subtotal).value(number_format(subtotal.truncate))
      item(:tax).value(number_format(tax.truncate))
      item(:total).value(number_format(total.truncate))
      item(:charge).value('\ ' + number_format(total.truncate))

    end

    # 2ページ目
    report.start_new_page :layout => :second do

      ###########################
      # 明細行
      ###########################
      @@mitsumoriTankas.each {|row|
        # 3列目の処理
        if @@hash3.key?(row["seihinNo"])
          line = @@hash3[row["seihinNo"]]

          @@headers3.each {|header|
            id = header + '_3_' + line.to_s
            item(id).value(number_format(row[header]))
          }
        end

        # 4列目の処理
        # TODO:このロジックはない…
        if @@hash4.key?(row["seihinNo"])
          line = @@hash4[row["seihinNo"]]

          @@headers4.each {|header|
            if header == 'seihinName'
              id = header + '_4_' + line.to_s
              item(id).value(number_format(row[header]))
            end
          }
        end
      }

      @@mitsumoriSeihins.each {|row|
        # 3列目の処理
        if @@hash3.key?(row["seihinNo"])
          line = @@hash3[row["seihinNo"]]

          @@headers3.each {|header|
            id = header + '_3_' + line.to_s
            item(id).value(number_format(row[header]))
          }
        end

        # 4列目の処理
        # TODO:本来はここで紐付く製品名を取得するハズ…。
        if @@hash4.key?(row["seihinNo"])
          line = @@hash4[row["seihinNo"]]

          @@headers4.each {|header|
            if header != 'seihinName'
              id = header + '_4_' + line.to_s
              item(id).value(number_format(row[header]))
            end
          }
        end
      }

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

    fileName = Time.now.strftime("%Y%m%d%H%M%S") + "_Quotation" + ".pdf"

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

    fileName = Time.now.strftime("%Y%m%d%H%M%S") + "_ImageSample" + ".pdf"

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

def number_format(value)
  value.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
end
