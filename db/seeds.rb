# coding: utf-8

require "csv"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# add 1 record
MitsumoriSeihin.destroy_all(["1 = ?", 1])

MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 1, :tanka => 11111, :suryo => 1, :tax => 1000, :kin => 12111, :torokushaId => 1, :koshinshaId => 1)
MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 2, :tanka => 22222, :suryo => 2, :tax => 2000, :kin => 24222, :torokushaId => 1, :koshinshaId => 1)
MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 3, :tanka => 33333, :suryo => 3, :tax => 3000, :kin => 36333, :torokushaId => 1, :koshinshaId => 1)
MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 4, :tanka => 44444, :suryo => 4, :tax => 4000, :kin => 48444, :torokushaId => 1, :koshinshaId => 1)
MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 5, :tanka => 55555, :suryo => 5, :tax => 5000, :kin => 60555, :torokushaId => 1, :koshinshaId => 1)
MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => 6, :tanka => 66666, :suryo => 6, :tax => 6000, :kin => 72666, :torokushaId => 1, :koshinshaId => 1)



TestImage.destroy_all(["1 = ?", 1])

imageDir = File.join(Rails.root, 'db', 'import', 'images')

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


# add records from CSV file
MitsumoriTanka.destroy_all(["1 = ?", 1])

CSV.foreach('db/import/MitsumoriTankas.csv') do |row|
  MitsumoriTanka.create(:seihinNo => row[0], :seihinName => row[1], :tanka => row[2], :tax => row[3], :torokushaId => 1, :koshinshaId => 1)
end
