class User < ActiveRecord::Base
  #authenticates_with_sorcery!
  attr_accessible :koshinshaId, :loginId, :loginPassword, :manageFlg, :myoji, :myojiFuri, :name, :nameFuri, :shainCd, :shainId, :torokushaId
  #validates :shainCd,  :uniqueness => {:message =>'社員コードは既に登録されています。'}
  #validates :loginId,  :uniqueness => {:message =>'ログインIDは既に登録されています。'}
end
