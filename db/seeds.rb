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
@users = User.find(:all)
if @users.empty?
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
end


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
@kokyakus = Kokyaku.find(:all)
if @kokyakus.empty?
	Kokyaku.create(
		:kokyakuId => 1,
		:kokyakuNm => '顧客　太郎',
		:torokushaId => 1,
		:koshinshaId => 1
	)
end


# Seihin.destroy_all(["1 = ?", 1])
@seihins = Seihin.find(:all)
if @seihins.empty?
	Seihin.create(
		:seihinId => 1,
		:bunruiCd => 1.to_s,
		:bunruiNm => '分類１',
		:hinmeiCd => 1.to_s,
		:hinmeiNm => '品名１',
		:katashikiCd => 1.to_s,
		:katashikiNm => '座位保持装置 型式001',
		:torokushaId => 1,
		:koshinshaId => 1
	)
end


# KonyuRireki.destroy_all(["1 = ?", 1])
@konyuRirekis = KonyuRireki.find(:all)
if @konyuRirekis.empty?
	KonyuRireki.create(
		:konyuRirekiId => 1,
		:kokyakuId => 1,
		:mitsumoriDt => '2013/03/20',
		:mitsumoriTantoEigyoCd => 1,
		:seihinId => 1,
		:torokushaId => 1,
		:koshinshaId => 1
	)
end


# Mitsumori.destroy_all(["1 = ?", 1])
@mitsumoris = Mitsumori.find(:all)
if @mitsumoris.empty?
	Mitsumori.create(
		:konyuRirekiId => 1,
		:kokyakuId => 1,
		:mitsumoriNo => 1,
		:torokushaId => 1,
		:koshinshaId => 1,
		:COL1_1 => 1,
		:COL2_1 => 1,
		:COL3_1 => 1
	)
end


# imageDir = File.join(Rails.root, 'public', 'images' , 'items')
imageDir = File.join(Rails.root, 'db', 'import', 'images')

# TestImage.destroy_all(["1 = ?", 1])
@testImages = TestImage.find(:all)
if @testImages.empty?
	TestImage.create(
		:mitsumoriNo => 1,
		:text => "Sample Text",
	 	:mainImage1 => File.read(File.join(imageDir, 'image002.jpg')),
	 	:mainImage2 => File.read(File.join(imageDir, 'image010.jpg')),
	 	:subImage1  => File.read(File.join(imageDir, 'image018.jpg')),
	 	:subImage2  => File.read(File.join(imageDir, 'image024.jpg')),
	 	:subImage3  => File.read(File.join(imageDir, 'image034.jpg')),
	 	:subImage4  => File.read(File.join(imageDir, 'image038.jpg'))
	)
end


MitsumoriSeihin.destroy_all(["1 = ?", 1])

@mitsumoriTankas = MitsumoriTanka.find(:all, :order => "seihinNo")
@mitsumoriTankas.each_with_index do |row, i|
	# サンプルデータ登録件数
	if i >= 40
		break
	end

	# 数量=>1～5までを順番に設定
	num =  i % 5 + 1
	tanka = row["tanka"]
	tax = (tanka * num * row["tax"]).truncate
	kin = tanka * num
	MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => row["seihinNo"], :tanka => tanka, :suryo => num, :tax => tax, :kin => kin, :torokushaId => 1, :koshinshaId => 1)
end
