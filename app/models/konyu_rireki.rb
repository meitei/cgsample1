class KonyuRireki < ActiveRecord::Base

  attr_accessor :kokyakuNm, :uketsukeSesakuTantoNm, :byoinNm, :kariAwaseTantoNm, :nohinTantoNm, :mitsumoriTantoEigyoNm, :hinmeiNm

  # attr_accessible :byoinCd, :hokenShubetsuCd, :ishiNm, :juchuDt, :kannoDt, :kanryoDt, :kariAwaseDt, :kariAwaseTantoCd, :kin, :kofuDt, :kokyakuId, :konyuRirekiId, :koshinId, :koshinshaId, :mitsumoriDt, :mitsumoriKomokuCd, :mitsumoriTantoEigyoCd, :nohinDt, :nohinTantoCd, :nyukinDt, :oshiinDt, :rigakuRyohoNm, :sagyoRyohoNm, :seikyuKin, :shohinNm, :shohinSiyoBiko, :shubetsuCd, :sinsho, :torokushaId, :uketsukeSesakuTantoCd

  # attr_accessor　:kokyakuNm
#  attr_accessible :kokyakuNm
#  has_one :byoin

#  belongs_to :sesaku_shain, :class_name => "Shain", :foreign_key => "uketsukeSesakuTantoCd", :primary_key => "shainCd"
end
