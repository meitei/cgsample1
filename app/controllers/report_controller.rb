# coding: utf-8
require 'thinreports'
require 'time'
require 'date'
require 'open-uri'

class ReportController < ApplicationController

  def report
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
    # ヘッダ項目データ取得
    ###########################
    ## 購入履歴情報取得
    konyuRireki = KonyuRireki.find(:first, :conditions => {:id => params[:id].to_i, :delFlg => 0})

    konyuRirekiId = konyuRireki["konyuRirekiId"].to_i
    kokyakuId     = konyuRireki["kokyakuId"].to_i

    ## ヘッダ項目：見積日付
    @@mitsumoriDt = nil
    if konyuRireki["mitsumoriDt"].present?
      @@mitsumoriDt = konyuRireki["mitsumoriDt"]
    end

    ## ヘッダ項目：宛名
    kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => kokyakuId, :delFlg => 0})
    @@kokyakuNm = kokyaku["kokyakuNm1"]
    if kokyaku["kokyakuNm2"].present?
      @@kokyakuNm += " " + kokyaku["kokyakuNm2"]
    end

    ## ヘッダ項目：型式
    @@katashiki = nil
    if konyuRireki["seihinId"].present?
      seihin = Seihin.find(konyuRireki["seihinId"])
      @@katashiki = seihin["katashikiNm"]
    end

    ## ヘッダ項目：担当者
    @@tanto = nil
    if konyuRireki["mitsumoriTantoEigyoCd"].present?
      # eigyo = User.find(konyuRireki["mitsumoriTantoEigyoCd"])
      eigyo = User.find(:first, :conditions => ["\"shainCd\" = ?", konyuRireki["mitsumoriTantoEigyoCd"]])
      @@tanto = eigyo["myoji"] + " " + eigyo["name"]
    end


    ###########################
    # 明細行データ取得
    ###########################
    @@mitsumori = Mitsumori.find(:first, :conditions => ["\"konyuRirekiId\" = ? and \"kokyakuId\" = ?", konyuRirekiId.to_i, kokyakuId.to_i])

    if @@mitsumori.present?

      mitsumoriNo = @@mitsumori["mitsumoriNo"]

      @@mitsumoriTankas = MitsumoriTanka.where(:buhinCd == nil)

      sqlstr =  "SELECT ms.\"seihinNo\", ms.tanka, ms.suryo, ms.tax, ms.kin, mt.tax AS tax_rate "
      sqlstr += "FROM mitsumori_seihins ms "
      sqlstr += "LEFT JOIN mitsumori_tankas mt ON ms.\"seihinNo\" = mt.\"seihinNo\" "
      sqlstr += "WHERE ms.\"mitsumoriNo\" = ? "
      args = [sqlstr, mitsumoriNo.to_i]
      sql = ActiveRecord::Base.send(:sanitize_sql_array, args)
      # logger.debug(sql)
      @@mitsumoriSeihins = ActiveRecord::Base.connection.execute(sql)

      sqlstr =  "SELECT * FROM ( "
      sqlstr += "  SELECT kb.\"buhinCd\", kb.\"buhinNm\", ms.tanka, ms.suryo, ms.tax, ms.kin, mt.tax AS tax_rate "
      sqlstr += "  FROM mitsumori_seihins ms "
      sqlstr += "  LEFT JOIN mitsumori_tankas mt ON ms.\"seihinNo\" = mt.\"seihinNo\" "
      sqlstr += "  LEFT JOIN kansei_buhins kb ON mt.\"buhinCd\" = kb.\"buhinCd\" "
      sqlstr += "  WHERE ms.\"mitsumoriNo\" = ? "
      sqlstr += ") kanseibuhins "
      sqlstr += "WHERE kanseibuhins.\"buhinCd\" IS NOT NULL"
      args = [sqlstr, mitsumoriNo.to_i]
      sql = ActiveRecord::Base.send(:sanitize_sql_array, args)
      # logger.debug(sql)
      @@kanseiBuhins = ActiveRecord::Base.connection.execute(sql)


      # DB判定
      adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
      logger.debug(adapter)

      if adapter == "mysql2" then
        # MySQLの場合、ResultSetをそのまま扱えない
        @@mitsumoriSeihins.each(:as => :hash)
        @@kanseiBuhins.each(:as => :hash)
      end

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

        if @@mitsumoriDt.present?
          t = @@mitsumoriDt
          strDate = "平成" + (t.strftime("%y").to_i + 12).to_s + t.strftime("年%m月%d日")
          item(:date).value(strDate)
        end

        item(:name1).value('')  #仕様：空欄とする
        item(:name2).value(@@kokyakuNm)

        if @@katashiki.present?
          item(:model).value(@@katashiki)
        end

        if @@tanto.present?
          item(:name3).value(@@tanto)
        end

        # 集計項目
        # 3%集計
        subtotal_3per = 0
        taxtotal_3per = 0
        # 5%集計
        subtotal_5per = 0
        taxtotal_5per = 0
        # 集計
        subtotal = 0
        taxtotal = 0
        total = 0

        if @@mitsumoriTankas.present?
          ###########################
          # 明細行
          ###########################
          @@mitsumoriTankas.each {|row|
            # 1列目の処理
            # 採型分
            if @@hash0.key?(row["seihinNo"].to_i)
              line = @@hash0[row["seihinNo"].to_i]

              @@headers1.each {|header|
                if header == 'tanka'
                  id = 'saikei' + '_1_' + line.to_s
                  item(id).value(number_format(row[header]))
                end
              }
            end

            # 採寸分
            if @@hash1.key?(row["seihinNo"].to_i)
              line = @@hash1[row["seihinNo"].to_i]

              @@headers1.each {|header|
                if header == 'tanka'
                  id = 'saisun' + '_1_' + line.to_s
                  item(id).value(number_format(row[header]))
                end
              }
            end

            # 2列目の処理
            if @@hash2.key?(row["seihinNo"].to_i)
              line = @@hash2[row["seihinNo"].to_i]

              @@headers2.each {|header|
                if header == 'tanka'
                  id = header + '_2_' + line.to_s
                  item(id).value(number_format(row[header]))
                end
              }
            end
          }
        end

        if @@mitsumoriSeihins.present?
          @@mitsumoriSeihins.each {|row|

            # 1列目の処理
            # 採型分
            if @@hash0.key?(row["seihinNo"].to_i)
              # 集計
              if row["tax_rate"].to_s == 0.03.to_s
                subtotal_3per += row["kin"].to_i
                taxtotal_3per += row["tax"].to_i * row["suryo"].to_i
              elsif row["tax_rate"].to_s == 0.05.to_s
                subtotal_5per += row["kin"].to_i
                taxtotal_5per += row["tax"].to_i * row["suryo"].to_i
              end

              subtotal += row["kin"].to_i
              taxtotal += row["tax"].to_i * row["suryo"].to_i

              line = @@hash0[row["seihinNo"].to_i]

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
            if @@hash1.key?(row["seihinNo"].to_i)
              # 集計
              if row["tax_rate"].to_s == 0.03.to_s
                subtotal_3per += row["kin"].to_i
                taxtotal_3per += row["tax"].to_i * row["suryo"].to_i
              elsif row["tax_rate"].to_s == 0.05.to_s
                subtotal_5per += row["kin"].to_i
                taxtotal_5per += row["tax"].to_i * row["suryo"].to_i
              end

              subtotal += row["kin"].to_i
              taxtotal += row["tax"].to_i * row["suryo"].to_i

              line = @@hash1[row["seihinNo"].to_i]

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
            if @@hash2.key?(row["seihinNo"].to_i)
              # 集計
              if row["tax_rate"].to_s == 0.03.to_s
                subtotal_3per += row["kin"].to_i
                taxtotal_3per += row["tax"].to_i * row["suryo"].to_i
              elsif row["tax_rate"].to_s == 0.05.to_s
                subtotal_5per += row["kin"].to_i
                taxtotal_5per += row["tax"].to_i * row["suryo"].to_i
              end

              subtotal += row["kin"].to_i
              taxtotal += row["tax"].to_i * row["suryo"].to_i

              line = @@hash2[row["seihinNo"].to_i]

              @@headers2.each {|header|
                id = header + '_2_' + line.to_s
                item(id).value(number_format(row[header]))
              }
            end

            # 3行目分も集計に加える
            if @@hash3.key?(row["seihinNo"].to_i)
              # 集計
              if row["tax_rate"].to_s == 0.03.to_s
                subtotal_3per += row["kin"].to_i
                taxtotal_3per += row["tax"].to_i * row["suryo"].to_i
              elsif row["tax_rate"].to_s == 0.05.to_s
                subtotal_5per += row["kin"].to_i
                taxtotal_5per += row["tax"].to_i * row["suryo"].to_i
              end

              subtotal += row["kin"].to_i
              taxtotal += row["tax"].to_i * row["suryo"].to_i
            end
          }
        end

        # 4行目分も集計に加える
        if @@kanseiBuhins.present?
          @@kanseiBuhins.each_with_index do |row, i|
            # 仕様：最大28行目まで
            if i < 28
              # 集計
              if row["tax_rate"].to_s == 0.03.to_s
                subtotal_3per += row["kin"].to_i
                taxtotal_3per += row["tax"].to_i * row["suryo"].to_i
              elsif row["tax_rate"].to_s == 0.05.to_s
                subtotal_5per += row["kin"].to_i
                taxtotal_5per += row["tax"].to_i * row["suryo"].to_i
              end

              subtotal += row["kin"].to_i
              taxtotal += row["tax"].to_i * row["suryo"].to_i
            else
              break
            end
          end
        end

        ###########################
        # 集計項目
        ###########################
        total = subtotal + taxtotal
        item(:taxtotal_3per).value(number_format(taxtotal_3per.truncate))
        item(:subtotal_3per).value(number_format(subtotal_3per.truncate))
        item(:taxtotal_5per).value(number_format(taxtotal_5per.truncate))
        item(:subtotal_5per).value(number_format(subtotal_5per.truncate))
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
            if @@hash3.key?(row["seihinNo"].to_i)
              line = @@hash3[row["seihinNo"].to_i]

              @@headers3.each {|header|
                if header == 'tanka'
                  id = header + '_3_' + line.to_s
                  item(id).value(number_format(row[header]))
                end
              }
            end
          }
        end

        if @@mitsumoriSeihins.present?
          # 3列目の処理
          @@mitsumoriSeihins.each {|row|
            if @@hash3.key?(row["seihinNo"].to_i)
              line = @@hash3[row["seihinNo"].to_i]
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
            # 仕様：最大28行目まで
            if i < 28
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
    fileInfo = {'fileName' =>"/tmp/" + fileName}

    # render :json => fileInfo
    respond_to do |format|
      format.html
      format.json { render json: fileInfo }
    end
  end
end

def number_format value
  value.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
end
