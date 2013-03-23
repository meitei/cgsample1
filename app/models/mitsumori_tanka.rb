class MitsumoriTanka < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :seihinNo, :seihinName, :tanka, :tax, :buhinCd, :torokushaId, :koshinshaId
end
