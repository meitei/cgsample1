class Kokyaku < ActiveRecord::Base
	#named_scope :search_kokyakuCdFrom, lambda{|n| :conditions => {:name => n}}

  attr_accessible :address1, :address2, :biko, :fax, :gakkoNm, :kokyakuId, :kokyakuNm, :kokyakuNmKana, :koshinshaId, :postNo, :seibetsu, :shobyouCd1, :shobyouCd2, :shobyouCd3, :tanjoDt, :tel1, :tel2, :torokushaId
end
