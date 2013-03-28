class WizardController < ApplicationController
  # GET /wizard
  # GET /wizard.json
  def index
  	#filename=ARGV[0]
	file = open("/mitsumori/step_1.html")
	text = file.read
	print text
	file.close
    @responce = {
      html: text
    }
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end
end
