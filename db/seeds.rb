# coding: utf-8

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo =>1, :tanka => 25200, :suryo => 3, :tax => 1260, :kin => 26460, :torokushaId => 1, :koshinshaId => 1)
MitsumoriTanka.create(:seihinNo => 1, :seihinName => '構造フレーム　金属・木材', :tanka => 25200, :tax => 0.05, :torokushaId => 1, :koshinshaId => 1)
