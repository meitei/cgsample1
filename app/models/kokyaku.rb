class Kokyaku < ActiveRecord::Base
	has_one :shobyo
	#named_scope :search_kokyakuCdFrom, lambda{|n| :conditions => {:name => n}}

  attr_accessible :address1, :address2, :biko, :fax, :gakkoNm, :kokyakuId, :kokyakuNm1, :kokyakuNm2, :kokyakuNmKana1, :kokyakuNmKana2, :koshinshaId, :postNo, :seibetsu, :shobyouCd1, :shobyouCd2, :shobyouCd3, :tanjoGengo, :tanjoYear, :tanjoMonth, :tanjoDay, :tel1, :tel2, :torokushaId, :delFlg, :shobyouNm1, :shobyouNm2, :shobyouNm3
end
