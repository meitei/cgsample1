# coding: utf-8
require 'thinreports'
require 'time'
require 'date'
require 'RMagick'
require 'open-uri'

class ReportController < ApplicationController

  def report

    konyuRirekiId = params[:konyuRirekiId]
    kokyakuId = params[:kokyakuId]

    ###########################
    # 1列目
    ###########################
    # report header
    @@headers1 = ['tanka','suryo','kin']

    # 採型分
    # 'seihinNo',line'
    @@hash0 = {
      66 => 1,
      41 => 3,
      53 => 4,
      42 => 10,
      54 => 13
    }

    # 採寸分
    # 'seihinNo',line'
    @@hash1 = {
      55 => 1,
      # 66 => 1,
      89 => 2,
      32 => 3,
      # 41 => 3,
      43 => 4,
      # 53 => 4,
      73 => 5,
      56 => 6,
      90 => 7,
      70 => 8,
      33 => 9,
      39 => 10,
      # 42 => 10,
      37 => 11,
      44 => 12,
      51 => 13,
      # 54 => 13,
      49 => 14,
      74 => 15,
      81 => 16,
      57 => 18,
      75 => 20,
      82 => 21,
      2 => 22,
      78 => 23,
      87 => 24,
      3 => 25,
      79 => 25,
      1 => 28,
      4 => 29,
      94 => 31,
      96 => 32,
      71 => 33,
      108 => 34,
      109 => 35,
      110 => 36,
      111 => 37,
      112 => 38,
      93 => 39,
      113 => 40,
      114 => 41,
      115 => 42,
      116 => 43,
      117 => 44,
      118 => 45,
      119 => 46,
      120 => 47,
      121 => 48,
      97 => 49,
      98 => 50,
      99 => 51,
      100 => 52,
      101 => 53,
      102 => 54,
      103 => 55
    }

    ###########################
    # 2列目
    ###########################
    # report header
    @@headers2 = ['tanka','suryo','kin']

    # 'seihinNo',line'
    @@hash2 = {
      104 => 1,
      105 => 2,
      106 => 3,
      58 => 4,
      91 => 5,
      34 => 6,
      40 => 7,
      38 => 8,
      45 => 9,
      52 => 10,
      50 => 11,
      76 => 12,
      83 => 13,
      35 => 14,
      46 => 14,
      59 => 14,
      77 => 14,
      84 => 14,
      92 => 14,
      80 => 15,
      95 => 16,
      5 => 23,
      6 => 24,
      31 => 25,
      152 => 26,
      63 => 28,
      36 => 29,
      47 => 30,
      85 => 31,
      67 => 32,
      64 => 33,
      48 => 34,
      86 => 35,
      65 => 36,
      68 => 37,
      72 => 43,
      88 => 44
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
      107 => 14,
      7 => 16,
      8 => 17,
      9 => 18,
      133 => 19,
      153 => 19,
      134 => 20,
      135 => 21,
      136 => 22,
      10 => 23,
      137 => 24,
      154 => 24,
      11 => 25,
      125 => 25,
      138 => 25,
      12 => 26,
      139 => 26,
      126 => 27,
      140 => 27,
      155 => 27,
      141 => 28,
      122 => 29,
      130 => 29,
      149 => 29,
      161 => 29,
      123 => 30,
      131 => 30,
      150 => 30,
      162 => 30,
      124 => 31,
      132 => 31,
      151 => 31,
      163 => 31,
      142 => 32,
      156 => 32,
      143 => 33,
      157 => 33,
      127 => 34,
      144 => 34,
      158 => 34,
      164 => 34,
      128 => 35,
      145 => 35,
      159 => 35,
      165 => 35,
      129 => 36,
      146 => 36,
      160 => 36,
      166 => 36,
      147 => 37,
      148 => 38
    }

    ###########################
    # 4列目
    ###########################
    # report header
    @@headers4 = ['seihinName','tanka','suryo','kin']


    ###########################
    # データ取得
    ###########################
    @@konyuRireki = KonyuRireki.where("\"konyuRirekiId\" == ? and \"kokyakuId\" == ?", konyuRirekiId.to_s, kokyakuId.to_s).first
    @@mitsumoriDt = @@konyuRireki["mitsumoriDt"]
    
    kokyaku = Kokyaku.find(@@konyuRireki["kokyakuId"])
    @@atena = kokyaku["kokyakuNm"]

    eigyo = User.find(@@konyuRireki["mitsumoriTantoEigyoCd"])
    @@tanto = eigyo["myoji"] + " " + eigyo["name"]

    # TODO:カラム修正seihinCd
    seihin = Seihin.find(@@konyuRireki["mitsumoriTantoEigyoCd"])
    @@katashiki = seihin["katashikiNm"]


    @@mitsumori = Mitsumori.where("\"konyuRirekiId\" == ? and \"kokyakuId\" == ?", konyuRirekiId.to_s, kokyakuId.to_s).first

    if @@mitsumori.present?
      mitsumoriNo = @@mitsumori["mitsumoriNo"]

      @@mitsumoriTankas = MitsumoriTanka.where(:buhinCd == nil)

      @@mitsumoriSeihins = MitsumoriSeihin.where(:mitsumoriNo == mitsumoriNo)

      sqlstr = "SELECT * FROM (SELECT * FROM mitsumori_seihins ms LEFT JOIN mitsumori_tankas mt ON ms.\"seihinNo\" = mt.\"seihinNo\" LEFT JOIN kansei_buhins kn ON mt.\"buhinCd\" = kn.\"buhinCd\") WHERE \"buhinCd\" IS NOT NULL"
      @@kanseiBuhins = ActiveRecord::Base.connection.execute(sqlstr)
    end


    ###########################
    # 帳票埋め込み
    ###########################
    # ThinReportレイアウトのテンプレートの場所を指定する
    templateDir = File.join(Rails.root, 'app', 'reports')

    # 各ページで使用するテンプレートファイルを指定
    report = ThinReports::Report.new
    report.use_layout File.join(templateDir, 'Quotation_1'), :id => :first
    report.use_layout File.join(templateDir, 'Quotation_2'), :id => :second

    # 1ページ目
    report.start_new_page :layout => :first do

      if @@mitsumori.present?
        t = @@mitsumoriDt
        strDate = "平成" + (t.strftime("%y").to_i + 12).to_s + t.strftime("年%m月%d日")
        item(:date).value(strDate)

        item(:name1).value(@@atena)
        item(:name2).value('○○ ○○○')
        item(:model).value(@@katashiki)
        item(:name3).value(@@tanto)

        if @@mitsumoriTankas.present?
          ###########################
          # 明細行
          ###########################
          @@mitsumoriTankas.each {|row|
            # 1列目の処理
            # 採型分
            if @@hash0.key?(row["seihinNo"])
              line = @@hash0[row["seihinNo"]]

              @@headers1.each {|header|
                if header == 'tanka'
                  id = 'saikei' + '_1_' + line.to_s
                else
                  id = header + '_1_' + line.to_s
                end
                item(id).value(number_format(row[header]))
              }
            end

            # 採寸分
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
        end

        subtotal = 0
        tax = 0
        total = 0

        if @@mitsumoriSeihins.present?
          @@mitsumoriSeihins.each {|row|
            # 1列目の処理
            # 採型分
            if @@hash0.key?(row["seihinNo"])
              line = @@hash0[row["seihinNo"]]

              @@headers1.each {|header|
                if header == 'tanka'
                  id = 'saikei' + '_1_' + line.to_s
                else
                  id = header + '_1_' + line.to_s
                end
                item(id).value(number_format(row[header]))
              }
            end

            # 採寸分
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
        end


        ###########################
        # 集計項目
        ###########################
        item(:subtotal).value(number_format(subtotal.truncate))
        item(:tax).value(number_format(tax.truncate))
        item(:total).value(number_format(total.truncate))
        item(:charge).value('\ ' + number_format(total.truncate))
      end
    end

    # 2ページ目
    report.start_new_page :layout => :second do

      if @@mitsumori.present?
        ###########################
        # 明細行
        ###########################
        # 3列目の処理
        if @@mitsumoriTankas.present?
          @@mitsumoriTankas.each {|row|
            if @@hash3.key?(row["seihinNo"])
              line = @@hash3[row["seihinNo"]]

              @@headers3.each {|header|
                id = header + '_3_' + line.to_s
                item(id).value(number_format(row[header]))
              }
            end
          }
        end

        if @@mitsumoriSeihins.present?
          # 3列目の処理
          @@mitsumoriSeihins.each {|row|
            if @@hash3.key?(row["seihinNo"])
              line = @@hash3[row["seihinNo"]]

              @@headers3.each {|header|
                id = header + '_3_' + line.to_s
                item(id).value(number_format(row[header]))
              }
            end
          }
        end

        if @@kanseiBuhins.present?
          # 4列目の処理
          @@kanseiBuhins.each_with_index do |row, i|
            # 仕様：最大26行目まで
            if i < 26
              line = i + 1
              @@headers4.each {|header|
                id = header + '_4_' + line.to_s
                if header == 'seihinName'
                  item(id).value(row["buhinNm"])
                else
                  item(id).value(number_format(row[header]))
                end
              }
            else
              break
            end
          end
        end
      end
    end

    ###########################
    # PDFファイル操作
    ###########################
    # 保存先
    saveDir = File.join(Rails.root, "public", "tmp")

    # tmp内のファイルを削除する
    files = Dir.glob(File.join(saveDir,"*.pdf"))
    files.each do |file|
        fileDate = File.basename(file)[0..7] 
        # 保存日数を指定する (※当日分だけ保持)
        delDate = (Date.today).strftime("%Y%m%d")
        if fileDate < delDate
          File.delete(file)
        end
    end

    # ディレクトリの作成
    if !File.exists?(saveDir)
        Dir.mkdir(saveDir)
    end

    fileName = Time.now.strftime("%Y%m%d%H%M%S") + "_" + kokyakuId.to_s + "_見積書" + ".pdf"

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
end


def number_format(value)
  value.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
end
