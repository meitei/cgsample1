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
    id = params[:id]
    column = params[:column].to_i

    @img = TestImage.find(:first, :conditions => { :mitsumoriNo => id })

    case column
      when 1
        columnNm = "mainImage1"
        type = "image/jpg"
      when 2
        columnNm = "mainImage2"
        type = "image/png"
      when 3
        columnNm = "subImage1"
        type = "image/png"
      when 4
        columnNm = "subImage2"
        type = "image/png"
      else
        columnNm = "mainImage1"
        type = "image/jpg"
    end

    send_data(@img[columnNm], :disposition => "inline", :type => type)
  end

end
