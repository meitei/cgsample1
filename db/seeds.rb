# coding: utf-8

require "csv"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


############################################################
# Init User Data
############################################################
####User.destroy_all(["1 = ?", 1])
User.create(
	:username => 'admin',
	:email => 'admin@aaaaa.co.jp',
	:password => 'admin',
	:password_confirmation => 'admin',
	:shainCd => 1,
	:koshinshaId => 1,
	:torokushaId => 1,
	:myoji => 'システム',
	:name => '管理者',
	:myojiFuri => 'システム',
	:nameFuri => 'カンリシャ',
	:manageFlg => 1
)


############################################################
# Master Data
############################################################
# add records from CSV file
MitsumoriTanka.destroy_all(["1 = ?", 1])

CSV.foreach('db/import/MitsumoriTankas.csv') do |row|
  MitsumoriTanka.create(:seihinNo => row[0], :seihinName => row[1], :tanka => row[2], :tax => row[3], :buhinCd => row[4], :torokushaId => 1, :koshinshaId => 1)
end

# TODO:完成部品マスタ(仮)
# add records from CSV file
KanseiBuhin.destroy_all(["1 = ?", 1])

CSV.foreach('db/import/MitsumoriTankas.csv') do |row|
  if row[4].present?
    KanseiBuhin.create(:buhinCd => row[4], :buhinNm => row[1], :kakaku => row[2], :katashikiCd => row[4], :katashikiNm => row[4].to_s + "型", :shiyoBuhin => row[1], :biko => row[0], :torokushaId => 1, :koshinshaId => 1)
  end
end

############################################################
# Test Data
############################################################
#Kokyaku.destroy_all(["1 = ?", 1])
Kokyaku.create(
	:kokyakuId => 1,
	:kokyakuNm => '顧客　太郎',
	:torokushaId => 1,
	:koshinshaId => 1
)


# Seihin.destroy_all(["1 = ?", 1])
#Seihin.create(
#	:seihinId => 1,
#	:bunruiCd => 1,
#	:bunruiNm => '分類１',
#	:hinmeiCd => 1,
#	:hinmeiNm => '品名１',
#	:katashikiCd => 1,
#	:katashikiNm => '座位保持装置 型式001',
#	:torokushaId => 1,
#	:koshinshaId => 1
#)


# MitsumoriSeihin.destroy_all(["1 = ?", 1])
200.times{|num|
	num = num + 1
	tanka = num * 100
	tax = tanka * num * 0.05
	kin = tanka * num + tax
	MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => num, :tanka => tanka, :suryo => num, :tax => tax, :kin => kin, :torokushaId => 1, :koshinshaId => 1)
}


# KonyuRireki.destroy_all(["1 = ?", 1])
KonyuRireki.create(
	:konyuRirekiId => 1,
	:kokyakuId => 1,
	:mitsumoriDt => '2013/03/20',
	:mitsumoriTantoEigyoCd => 1,
	# :seihinCd => 1,
	:torokushaId => 1,
	:koshinshaId => 1
)


# Mitsumori.destroy_all(["1 = ?", 1])
Mitsumori.create(
	:konyuRirekiId => 1,
	:kokyakuId => 1,
	:mitsumoriNo => 1,
	:torokushaId => 1,
	:koshinshaId => 1
)


imageDir = File.join(Rails.root, 'db', 'import', 'images')
# TestImage.destroy_all(["1 = ?", 1])
TestImage.create(
	:mitsumoriNo => 1,
	:text => "Sample Text",
 	:mainImage1 => File.read(File.join(imageDir, 'char1.jpg')),
 	:mainImage2 => File.read(File.join(imageDir, 'char2.png')),
 	:subImage1 => File.read(File.join(imageDir, 'face0.png')),
 	:subImage2 => File.read(File.join(imageDir, 'face3.png')),
 	:subImage3 => File.read(File.join(imageDir, 'face6.png')),
 	:subImage4 => File.read(File.join(imageDir, 'face7.png'))
)
