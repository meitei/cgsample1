class Shobyo < ActiveRecord::Base
	belongs_to :kokyaku
  attr_accessible :haishiDt, :icd10Cd, :koshinshaId, :shobyoNm, :shobyoNmKana, :shobyoCd, :shusaiDt, :torokushaId
end
