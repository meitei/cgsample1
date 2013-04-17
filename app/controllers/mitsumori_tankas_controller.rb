class MitsumoriTankasController < ApplicationController
  def index
    @mitsumori_tankas = MitsumoriTanka.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @mitsumori_tankas }
    end
  end
end
