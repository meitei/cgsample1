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

200.times{|num|
	num = num + 1
	tanka = num * 100
	tax = tanka * num * 0.05
	kin = tanka * num + tax
	MitsumoriSeihin.create(:mitsumoriNo => 1, :seihinNo => num, :tanka => tanka, :suryo => num, :tax => tax, :kin => kin, :torokushaId => 1, :koshinshaId => 1)
}



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
