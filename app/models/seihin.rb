# coding: utf-8
class Seihin < ActiveRecord::Base
  attr_accessible :seihinId,:bunruiCd,:bunruiNm,:hinmeiCd,:hinmeiNm,:katashikiCd,:katashikiNm,:koshinshaId,:torokushaId
  validates :bunruiCd, :uniqueness => { :scope => [:hinmeiCd, :katashikiCd],:message=>'分類コード、品名コード、型式コードの組み合わせは、既に登録されています。'}
end
