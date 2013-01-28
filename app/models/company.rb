class Company < ActiveRecord::Base
  attr_accessible :address, :fax, :name, :post, :tel, :url
end
