class Item < ActiveRecord::Base
  attr_accessible :kin, :name

  # 名前：入力チェック
  validates :name, :presence => true
  #validates :name, :length => { :maximum => 10, :message => "name error length" } # 日本語化するには、jaファイルを作成する。

end