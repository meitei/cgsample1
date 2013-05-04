class KanseizuController < ApplicationController

  def show
    konyuRireki = KonyuRireki.find(params[:id].to_i)

    konyuRirekiId = konyuRireki["konyuRirekiId"].to_i
    kokyakuId     = konyuRireki["kokyakuId"].to_i

    @mitsumori = Mitsumori.find(:first, :conditions => ["\"konyuRirekiId\" = ? and \"kokyakuId\" = ?", konyuRirekiId, kokyakuId])

    @hash0 = {
        "COL1_1" => {
            1 => "image002.jpg",
            2 => "image004.jpg",
            3 => "image006.gif"
        },
        "COL2_1" => {
            1 => "image008.jpg",
            2 => "image010.jpg",
            3 => ["image013.jpg", "image014.jpg"]
        },
        "COL3_1" => {
            1 => "image016.jpg",
            2 => "image018.jpg",
            3 => "image020.jpg",
            4 => "image022.jpg"
        },
        "COL4_1" => {
            2 => "image024.jpg",
            3 => "image026.jpg",
            4 => "image028.jpg",
            5 => "image030.jpg"
        },
        "COL5_1" => {
            1 => "image032.jpg",
            2 => "image034.jpg",
            3 => "image036.jpg"
        },
        "COL6_1" => {
            2 => "image038.jpg",
            3 => "image040.jpg"
        },
        "COL7_1" => {
            1 => "image042.jpg",
            2 => "image044.jpg",
            3 => "image046.jpg",
            4 => "image048.jpg"
        },
        "COL8_1" => {
            1 => "image050.jpg",
            2 => "image052.jpg",
            3 => "image054.jpg",
            4 => "image056.jpg"
        },
        "COL9_1" => {
            2 => ["image058.jpg", "image061.jpg", "image062.jpg"],
            3 => "image064.jpg",
            4 => "image066.jpg",
            5 => "image068.jpg"
        },
        "COL10_1" => {
            2 => "image070.jpg",
            3 => "image072.jpg",
            4 => "image074.jpg"
        },
        "COL10_3" => {
            1 => "image076.jpg"
        },
        "COL11_1" => {
            2 => "image078.jpg",
            3 => "image080.jpg",
            4 => "image082.jpg"
        },
        "COL12_1" => {
            1 => "image084.jpg",
            2 => "image086.jpg",
            3 => "image088.jpg"
        },
        "COL13_1" => {
            2 => "image090.jpg"
        },
        "COL13_3" => { # ※COL13_3はCOL13_1の値によって出力画像が変動する。
                    1 => ["image092.jpg", "image096.jpg"],
                    2 => ["image094.jpg", "image098.jpg"]
        },
        "COL14_1" => {
            2 => "image100.jpg",
            3 => "image102.jpg"
        },
        "COL15_1" => {
            2 => "image104.jpg",
            3 => "image106.jpg",
            4 => "image108.jpg"
        },
        "COL16_2" => {
            1 => "image110.jpg"
        },
        "COL16_3" => {
            1 => "image112.jpg"
        },
        "COL16_4" => {
            1 => "image114.jpg"
        },
        "COL16_13" => {
            1 => "image115.jpg"
        },
        "COL16_9" => {
            1 => "image117.jpg"
        },
        "COL16_12" => {
            1 => "image119.jpg"
        },
        "COL17_2" => {
            1 => "image121.jpg"
        },
        "COL17_3" => {
            1 => "image123.jpg"
        },
        "COL17_4" => {
            1 => "image125.jpg"
        },
        "COL17_5" => {
            1 => "image127.jpg"
        },
        "COL17_6" => {
            1 => "image129.jpg"
        },
        "COL17_11" => {
            1 => "image123.jpg"
        },
        "COL17_12" => {
            1 => "image123.jpg"
        },
        "COL17_13" => {
            1 => "image133.jpg"
        },
        "COL17_15" => {
            1 => "image135.jpg"
        },
        "COL18_2" => {
            1 => "image137.jpg"
        },
        "COL19_2" => {
            1 => "image137.jpg"
        },
        "COL19_5" => {
            1 => "image139.jpg"
        },
        "COL19_13" => {
            1 => "image141.jpg"
        },
        "COL19_14" => {
            1 => "image143.jpg"
        },
        "COL20_2" => {
            1 => "image137.jpg"
        },
        "COL20_8" => {
            1 => "image141.jpg"
        },
        "COL20_9" => {
            1 => "image143.jpg"
        },
        "COL21_2" => {
            1 => "image137.jpg"
        },
        "COL22_1" => {
            1 => "image011.jpg",
            2 => "image012.jpg"
        },
        "COL23_1" => {
            1 => "image145.jpg",
            2 => "image148.jpg",
            3 => "image149.jpg",
            4 => "image151.jpg",
            5 => "image152.jpg",
            6 => "image153.jpg"
        },
        "COL24_2" => {
            1 => "image156.jpg",
            2 => "image156.jpg",
            3 => "image155.jpg",
            4 => "image155.jpg",
            5 => "image154.jpg",
            6 => "image154.jpg",
            7 => "image154.jpg",
            8 => "image154.jpg",
            9 => "image154.jpg",
            10 => "image154.jpg"
        },
        "COL24_3" => {
            1 => "image159.jpg",
            2 => "image159.jpg",
            3 => "image159.jpg"
        },
        "COL25_1" => {
            1 => "image161.jpg",
            2 => "image161.jpg"
        }
    }

    mitsumoriNo = @mitsumori["mitsumoriNo"]

    @array = []

    @hash0.each_pair {|column, _hash|
      if @mitsumori[column].present? && @mitsumori[column] > 0
        _hash.each_pair {|key, value|
          # COL13_3の場合、COL13_1の値によって出力画像が変動する
          if column == "COL13_3"
            # COL13_1=3：角度調整の場合
            if @mitsumori["COL13_1"] == 3
              @array.push value[0]
            # COL13_1=4：開閉機構の場合w
            elsif @mitsumori["COL13_1"] == 4
              @array.push value[1]
            end
          else
            if @mitsumori[column] == key
              if value.is_a?(Array)
                value.each {|value2|
                  @array.push value2
                }
              else
                @array.push value
              end
            end
          end
        }
      end
    }

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @array }
    end
  end

  def show_mitsumori
    @konyuRireki = KonyuRireki.find(:first, :conditions => {:konyuRirekiId => params[:id]})
    redirect_to "/kanseizu/show?id=" + @konyuRireki["id"].to_s
  end

end
