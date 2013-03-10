class MitsumoriSeihin < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :mitsumoriNo, :seihinNo, :tanka, :suryo, :tax, :kin, :torokushaId, :koshinshaId
end
