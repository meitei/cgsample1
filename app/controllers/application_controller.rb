class ApplicationController < ActionController::Base
  #protect_from_forgery
  #logger.debug(Rails.env + ":Start!")
  #http_basic_authenticate_with :name => "rc00013", :password => "5ODaH27X" if Rails.env.staging?
  before_filter :require_login

  protected
  def not_authenticated
    redirect_to login_path, :alert => "Please login first."
  end

  #   protected
  # def require_login
  #   logger.debug(logged_in?)
  # 	logger.debug(current_user)
  # 	if logged_in? && @current_user != @current_account.current_user
  # 		not_authenticated()
  # 	else
  # 		super
  # 	end
  # 	#super
  # end
end
