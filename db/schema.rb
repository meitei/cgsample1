# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130224095038) do

  create_table "byoins", :primary_key => "byoinCd", :force => true do |t|
    t.string   "byoinNm",     :limit => 50, :null => false
    t.integer  "koshinshaId",               :null => false
    t.integer  "torokushaId",               :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "companies", :force => true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "post"
    t.string   "tel"
    t.string   "fax"
    t.string   "url"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "hoken_shubetsus", :primary_key => "hokenShubetsuCd", :force => true do |t|
    t.string   "hokenShubetsuNm", :limit => 50, :null => false
    t.integer  "hyojiJun",                      :null => false
    t.integer  "koshinshaId",                   :null => false
    t.integer  "torokushaId",                   :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  create_table "items", :force => true do |t|
    t.string   "name"
    t.integer  "kin"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "kokyakus", :primary_key => "kokyakuId", :force => true do |t|
    t.string   "kokyakuNm",     :limit => 100
    t.string   "kokyakuNmKana", :limit => 100
    t.integer  "seibetsu"
    t.date     "tanjoDt"
    t.string   "postNo",        :limit => 8
    t.string   "address1",      :limit => 100
    t.string   "address2",      :limit => 100
    t.string   "tel1",          :limit => 13
    t.string   "tel2",          :limit => 13
    t.string   "fax",           :limit => 13
    t.integer  "shobyouCd1"
    t.integer  "shobyouCd2"
    t.integer  "shobyouCd3"
    t.string   "gakkoNm",       :limit => 100
    t.string   "biko",          :limit => 200
    t.integer  "koshinshaId",                  :null => false
    t.integer  "torokushaId",                  :null => false
    t.datetime "created_at",                   :null => false
    t.datetime "updated_at",                   :null => false
  end

  create_table "konyu_rirekis", :force => true do |t|
    t.integer  "konyuRirekiId"
    t.integer  "kokyakuId"
    t.integer  "byoinCd"
    t.string   "ishiNm"
    t.string   "rigakuRyohoNm"
    t.string   "sagyoRyohoNm"
    t.integer  "mitsumoriTantoEigyoCd"
    t.date     "mitsumoriDt"
    t.integer  "shubetsuCd"
    t.integer  "mitsumoriKomokuCd"
    t.string   "shohinNm"
    t.string   "sinsho"
    t.integer  "hokenShubetsuCd"
    t.decimal  "kin"
    t.decimal  "seikyuKin"
    t.string   "shohinSiyoBiko"
    t.integer  "uketsukeSesakuTantoCd"
    t.date     "juchuDt"
    t.integer  "kariAwaseTantoCd"
    t.date     "kariAwaseDt"
    t.integer  "nohinTantoCd"
    t.date     "nohinDt"
    t.date     "kofuDt"
    t.date     "kannoDt"
    t.date     "nyukinDt"
    t.date     "oshiinDt"
    t.date     "kanryoDt"
    t.integer  "koshinshaId"
    t.integer  "torokushaId"
    t.integer  "koshinId"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
  end

  create_table "mitsumoris", :force => true do |t|
    t.integer  "mitsumoriId"
    t.integer  "kokyakuId"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "shains", :primary_key => "shainId", :force => true do |t|
    t.string   "shainCd",       :limit => 10, :null => false
    t.string   "myoji",         :limit => 50, :null => false
    t.string   "name",          :limit => 50, :null => false
    t.string   "myojiFuri",     :limit => 50, :null => false
    t.string   "nameFuri",      :limit => 50, :null => false
    t.string   "loginId",       :limit => 50, :null => false
    t.string   "loginPassword", :limit => 50, :null => false
    t.integer  "manageFlg",                   :null => false
    t.integer  "koshinshaId",                 :null => false
    t.integer  "torokushaId",                 :null => false
    t.date     "loginLastDt"
    t.datetime "created_at",                  :null => false
    t.datetime "updated_at",                  :null => false
  end

  create_table "shobyos", :primary_key => "shobyoCd", :force => true do |t|
    t.string   "shobyoNm",     :limit => 50, :null => false
    t.string   "shobyoNmKana", :limit => 50, :null => false
    t.string   "icd10Cd",      :limit => 50
    t.date     "shusaiDt"
    t.date     "haishiDt"
    t.integer  "koshinshaId",                :null => false
    t.integer  "torokushaId",                :null => false
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "username",         :null => false
    t.string   "email"
    t.string   "crypted_password"
    t.string   "salt"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
