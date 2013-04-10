# encoding: utf-8
class SessionsController < ApplicationController
  skip_before_filter :require_login, :except => [:destroy]
  def new
    @user = User.new
  end  
    
  def create
    respond_to do |format|
      @user = login(params[:username],params[:password],)
      if @user.present? && @user['manageFlg'] != 9
        format.html { redirect_back_or_to(:root, :notice => 'Login successful.') }
        format.xml { render :xml => @user, :status => :created, :location => @user }
      else
        if @user.present?
          logout
        end
        format.html { flash.now[:alert] = "ログインに失敗しました。"; render :action => "new" }
        # format.html { flash.now[:alert] = "Login failed."; render :action => "new" }
        format.xml { render :xml => @user.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    logout
    # redirect_to(:login, :notice => 'Logged out!')
    redirect_to(:login)
  end 
end
