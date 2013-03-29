class KanseizuController < ApplicationController

  def show
    id = params[:id]

    @img = TestImage.find(:first, :conditions => { :mitsumoriNo => id })
    params[:id]
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @img }
    end
  end

  def get_image
    type = "image/jpg"

    id = params[:id]
    column = params[:column].to_i

    @img = TestImage.find(:first, :conditions => { :mitsumoriNo => id })

    case column
      when 1
        columnNm = "mainImage1"
      when 2
        columnNm = "mainImage2"
      when 3
        columnNm = "subImage1"
      when 4
        columnNm = "subImage2"
      when 5
        columnNm = "subImage3"
      when 6
        columnNm = "subImage4"
      else
        columnNm = "mainImage1"
    end

    send_data(@img[columnNm], :disposition => "inline", :type => type)
  end

end
