class ApplicationController < ActionController::Base
  protect_from_forgery

  http_basic_authenticate_with :name => "rc00013", :password => "5ODaH27X" if Rails.env.staging?
end
