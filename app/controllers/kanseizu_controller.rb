class KanseizuController < ApplicationController

  def show
    konyuRirekiId = params[:konyuRirekiId].to_i
    kokyakuId = params[:kokyakuId].to_i

    @mitsumori = Mitsumori.find(:first, :conditions => ["\"konyuRirekiId\" = ? and \"kokyakuId\" = ?", konyuRirekiId, kokyakuId])

    @hash0 = {
      "COL1_1" => "image002.jpg",
      "COL2_1" => "image004.jpg",
      "COL3_1" => "image006.gif",
      "COL4_1" => "image008.jpg"
    }

    mitsumoriNo = @mitsumori["mitsumoriNo"]

    @array = []

    @hash0.each_pair {|key, value|
      if @mitsumori[key] == 1
        @array.push value
      end
    }

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @array }
    end
  end

  # def get_image
  #   type = "image/jpg"

  #   id = params[:id]
  #   column = params[:column].to_i

  #   @img = TestImage.find(:first, :conditions => { :mitsumoriNo => id })

  #   case column
  #     when 1
  #       columnNm = "mainImage1"
  #     when 2
  #       columnNm = "mainImage2"
  #     when 3
  #       columnNm = "subImage1"
  #     when 4
  #       columnNm = "subImage2"
  #     when 5
  #       columnNm = "subImage3"
  #     when 6
  #       columnNm = "subImage4"
  #     else
  #       columnNm = "mainImage1"
  #   end

  #   send_data(@img[columnNm], :disposition => "inline", :type => type)
  # end

end
