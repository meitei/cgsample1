class ApplicationController < ActionController::Base
  protect_from_forgery
  logger.debug(Rails.env + ":Start!")
  http_basic_authenticate_with :name => "rc00013", :password => "5ODaH27X" if Rails.env.staging?
  #before_filter :require_login

  protected
  def not_authenticated
    redirect_to login_path, :alert => "Please login first."
  end
end
