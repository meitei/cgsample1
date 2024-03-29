# coding: utf-8
class User < ActiveRecord::Base
	authenticates_with_sorcery!
	  attr_accessible :username, :email, :password, :password_confirmation, :shainCd, :myoji, :name, :myojiFuri, :nameFuri, :manageFlg, :koshinshaId, :torokushaId

#	  validates_length_of :password, :minimum => 3, :message => "password must be at least 3 characters long", :if => :password
#      validates_confirmation_of :password, :message => "should match confirmation", :if => :password
  validates :shainCd,  :uniqueness => {:message =>'社員コードは既に登録されています。'}
  validates :username,  :uniqueness => {:message =>'ログインIDは既に登録されています。'}
end
