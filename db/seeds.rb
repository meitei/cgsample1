# encoding: utf-8

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
		# :password_confirmation => 'admin',
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
# Kokyaku.destroy_all(["1 = ?", 1])
@kokyakus = Kokyaku.find(:all)
if @kokyakus.empty?
	Kokyaku.create(
		:kokyakuId => 2400001,
		:kokyakuNm1 => '顧客',
		:kokyakuNm2 => '太郎',
		:delFlg => 0,
		:torokushaId => 1,
		:koshinshaId => 1
	)
end

# Byoin.destroy_all(["1 = ?", 1])
@byoins = Byoin.find(:all)
if @byoins.empty?
	Byoin.create(
		:byoinCd => 1,
		:byoinNm => '九州病院',
		:torokushaId => 1,
		:koshinshaId => 1
	)
end

# HokenShubetsu.destroy_all(["1 = ?", 1])
@hoken_shubetsus = HokenShubetsu.find(:all)
if @hoken_shubetsus.empty?
	HokenShubetsu.create(
		:hokenShubetsuCd => 1,
		:hokenShubetsuNm => '保険１',
		:hyojiJun => 1,
		:torokushaId => 1,
		:koshinshaId => 1
	)
	HokenShubetsu.create(
		:hokenShubetsuCd => 2,
		:hokenShubetsuNm => '保険２',
		:hyojiJun => 2,
		:torokushaId => 1,
		:koshinshaId => 1
	)
end

# Shobyo.destroy_all(["1 = ?", 1])
@shobyos = Shobyo.find(:all)
if @shobyos.empty?
	Shobyo.create(
		:shobyoCd => 1,
		:shobyoNm => '傷病名称１',
		:shobyoNmKana => 'ショウビョウメイショウイチ',
		:icd10Cd => 'ICD-10_CODE',
		:shusaiDt => '2013/04/01',
		# :haishiDt => '2013/04/01',
		:torokushaId => 1,
		:koshinshaId => 1
	)
	Shobyo.create(
		:shobyoCd => 2,
		:shobyoNm => '傷病名称２',
		:shobyoNmKana => 'ショウビョウメイショウニ',
		:icd10Cd => 'ICD-10_CODE',
		:shusaiDt => '2013/04/02',
		# :haishiDt => '2013/04/02',
		:torokushaId => 1,
		:koshinshaId => 1
	)
	Shobyo.create(
		:shobyoCd => 3,
		:shobyoNm => '傷病名称３',
		:shobyoNmKana => 'ショウビョウメイショウサン',
		:icd10Cd => 'ICD-10_CODE',
		:shusaiDt => '2013/04/03',
		# :haishiDt => '2013/04/03',
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
		:konyuRirekiId => 240000001,
		:kokyakuId => 2400001,
		:mitsumoriDt => '2013/04/01',
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
		:konyuRirekiId => 240000001,
		:kokyakuId => 2400001,
		:mitsumoriNo => 1,
		:torokushaId => 1,
		:koshinshaId => 1,

		:COL1_1 => 1,
		:COL1_2 => 1,
		:COL2_1 => 3,
		:COL3_1 => 1,
		:COL3_2 => 1,
		:COL3_3 => 1,
		:COL3_4 => 1,
		:COL3_5 => 1,
		:COL3_6 => 1,
		:COL3_7 => 1,
		:COL3_8 => 1,
		:COL3_9 => 1,
		:COL3_10 => 1,
		:COL3_11 => 1,
		:COL3_12 => 1,
		:COL3_13 => 1,
		:COL4_1 => 2,
		:COL5_1 => 1,
		:COL5_2 => 1,
		:COL5_3 => 1,
		:COL5_4 => 1,
		:COL6_1 => 2,
		:COL7_1 => 1,
		:COL7_2 => 1,
		:COL7_3 => 1,
		:COL7_4 => 1,
		:COL7_5 => 1,
		:COL7_6 => 1,
		:COL7_7 => 1,
		:COL8_1 => 1,
		:COL8_2 => 1,
		:COL8_3 => 1,
		:COL9_1 => 2,
		:COL9_2 => 1,
		:COL9_3 => 1,
		:COL10_1 => 2,
		:COL10_2 => 1,
		:COL10_3 => 2,
		:COL10_4 => 1,
		:COL11_1 => 2,
		:COL11_2 => 1,
		:COL11_3 => 1,
		:COL11_4 => 1,
		:COL12_1 => 1,
		:COL13_1 => 4,
		:COL13_2 => 1,
		:COL13_3 => 2,
		:COL13_4 => 1,
		:COL13_5 => 1,
		:COL14_1 => 2,
		:COL14_2 => 1,
		:COL15_1 => 2,
		:COL16_1 => 1,
		:COL16_2 => 1,
		:COL16_3 => 1,
		:COL16_4 => 1,
		:COL16_5 => 1,
		:COL16_6 => 1,
		:COL16_7 => 1,
		:COL16_8 => 1,
		:COL16_9 => 1,
		:COL16_10 => 1,
		:COL16_11 => 1,
		:COL16_12 => 1,
		:COL16_13 => 1,
		:COL17_1 => 1,
		:COL17_2 => 1,
		:COL17_3 => 1,
		:COL17_4 => 1,
		:COL17_5 => 1,
		:COL17_6 => 1,
		:COL17_7 => 1,
		:COL17_8 => 1,
		:COL17_9 => 1,
		:COL17_10 => 1,
		:COL17_11 => 1,
		:COL17_12 => 1,
		:COL17_13 => 1,
		:COL17_14 => 1,
		:COL17_15 => 1,
		:COL18_1 => 1,
		:COL18_2 => 1,
		:COL18_3 => 1,
		:COL18_4 => 1,
		:COL18_5 => 1,
		:COL18_6 => 1,
		:COL18_7 => 1,
		:COL18_8 => 1,
		:COL19_1 => 1,
		:COL19_2 => 1,
		:COL19_3 => 1,
		:COL19_4 => 1,
		:COL19_5 => 1,
		:COL19_6 => 1,
		:COL19_7 => 1,
		:COL19_8 => 1,
		:COL19_9 => 1,
		:COL19_10 => 1,
		:COL19_11 => 1,
		:COL19_12 => 1,
		:COL19_13 => 1,
		:COL19_14 => 1,
		:COL19_15 => 1,
		:COL19_16 => 1,
		:COL19_17 => 1,
		:COL19_18 => 1,
		:COL19_19 => 1,
		:COL20_1 => 1,
		:COL20_2 => 1,
		:COL20_3 => 1,
		:COL20_4 => 1,
		:COL20_5 => 1,
		:COL20_6 => 1,
		:COL20_7 => 1,
		:COL20_8 => 1,
		:COL20_9 => 1,
		:COL20_10 => 1,
		:COL20_11 => 1,
		:COL20_12 => 1,
		:COL21_1 => 1,
		:COL21_2 => 1,
		:COL21_3 => 1,
		:COL21_4 => 1,
		:COL21_5 => 1,
		:COL21_6 => 1,
		:COL22_1 => 1,
		:COL22_2 => 1,
		:COL22_3 => 1,
		:COL23_1 => 1,
		:COL23_2 => 1,
		:COL23_3 => 1,
		:COL23_4 => 1,
		:COL23_5 => 1,
		:COL23_6 => 1,
		:COL24_1 => 1,
		:COL24_2 => 1,
		:COL24_3 => 1,
		:COL24_4 => 1,
		:COL24_5 => 1,
		:COL24_6 => 1,
		:COL24_7 => 1,
		:COL24_8 => 1,
		:COL24_9 => 1,
		:COL25_1 => 1
	)
end


MitsumoriSeihin.destroy_all(["1 = ?", 1])

@mitsumoriTankas = MitsumoriTanka.find(:all, :order => "\"seihinNo\"")
@mitsumoriTankas.each_with_index do |row, i|
	# サンプルデータ登録件数
	if i >= 40
		# break
	end

	# 数量=>1～5までを順番に設定
	num =  i % 5 + 1
	tanka = row["tanka"]
	tax = (tanka * row["tax"]).truncate
	kin = tanka * num
	MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => row["seihinNo"], :tanka => tanka, :suryo => num, :tax => tax, :kin => kin, :torokushaId => 1, :koshinshaId => 1)
end
