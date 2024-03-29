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

ActiveRecord::Schema.define(:version => 20130525053249) do

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

  create_table "kansei_buhins", :primary_key => "buhinCd", :force => true do |t|
    t.string   "buhinNm",     :limit => 50,  :null => false
    t.string   "katashikiCd"
    t.string   "katashikiNm", :limit => 50
    t.integer  "kakaku",                     :null => false
    t.string   "shiyoBuhin",  :limit => 50
    t.string   "biko",        :limit => 200
    t.integer  "koshinshaId",                :null => false
    t.integer  "torokushaId",                :null => false
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  create_table "kokyakus", :id => false, :force => true do |t|
    t.integer  "kokyakuId"
    t.integer  "seibetsu"
    t.string   "postNo",         :limit => 8
    t.string   "address1",       :limit => 100
    t.string   "address2",       :limit => 100
    t.string   "tel1",           :limit => 13
    t.string   "tel2",           :limit => 13
    t.string   "fax",            :limit => 13
    t.integer  "shobyouCd1"
    t.integer  "shobyouCd2"
    t.integer  "shobyouCd3"
    t.string   "gakkoNm",        :limit => 100
    t.string   "biko",           :limit => 200
    t.integer  "koshinshaId",                                  :null => false
    t.integer  "torokushaId",                                  :null => false
    t.datetime "created_at",                                   :null => false
    t.datetime "updated_at",                                   :null => false
    t.integer  "delFlg",                        :default => 0, :null => false
    t.integer  "tanjoGengo"
    t.integer  "tanjoYear"
    t.integer  "tanjoMonth"
    t.integer  "tanjoDay"
    t.string   "kokyakuNm1",     :limit => 50
    t.string   "kokyakuNm2",     :limit => 50
    t.string   "kokyakuNmKana1", :limit => 50
    t.string   "kokyakuNmKana2", :limit => 50
  end

  create_table "konyu_rirekis", :force => true do |t|
    t.integer  "konyuRirekiId",         :limit => 11
    t.integer  "kokyakuId",                                               :null => false
    t.integer  "byoinCd"
    t.string   "mitsumoriTantoEigyoCd", :limit => 10
    t.date     "mitsumoriDt"
    t.string   "shohinNm",              :limit => 100
    t.decimal  "kin"
    t.decimal  "seikyuKin"
    t.string   "shohinShiyoBiko",       :limit => 200
    t.string   "uketsukeSesakuTantoCd", :limit => 10
    t.date     "juchuDt"
    t.string   "kariAwaseTantoCd",      :limit => 10
    t.date     "kariAwaseDt"
    t.string   "nohinTantoCd",          :limit => 10
    t.date     "nohinDt"
    t.date     "kofuDt"
    t.date     "kannoDt"
    t.date     "nyukinDt"
    t.date     "oshiinDt"
    t.date     "kanryoDt"
    t.integer  "koshinshaId",                                             :null => false
    t.integer  "torokushaId",                                             :null => false
    t.datetime "created_at",                                              :null => false
    t.datetime "updated_at",                                              :null => false
    t.string   "ishiNm1",               :limit => 50
    t.string   "ishiNm2",               :limit => 50
    t.string   "rigakuRyohoNm1",        :limit => 50
    t.string   "rigakuRyohoNm2",        :limit => 50
    t.string   "sagyoRyohoNm1",         :limit => 50
    t.string   "sagyoRyohoNm2",         :limit => 50
    t.integer  "shubetsuKn"
    t.integer  "seihinId"
    t.integer  "hokenShubetsuCd1"
    t.integer  "hokenShubetsuCd2"
    t.binary   "kanseiImg",             :limit => 1048576
    t.binary   "kanseiTmbImg",          :limit => 1048576
    t.string   "kanseiImgName"
    t.integer  "delFlg",                                   :default => 0, :null => false
  end

  create_table "mitsumori_seihins", :id => false, :force => true do |t|
    t.integer  "id",          :null => false
    t.integer  "mitsumoriNo", :null => false
    t.integer  "seihinNo",    :null => false
    t.integer  "tanka",       :null => false
    t.integer  "suryo",       :null => false
    t.float    "tax",         :null => false
    t.integer  "kin",         :null => false
    t.integer  "koshinshaId", :null => false
    t.integer  "torokushaId", :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "mitsumori_tankas", :primary_key => "seihinNo", :force => true do |t|
    t.string   "seihinName",  :limit => 40
    t.integer  "tanka",                     :null => false
    t.float    "tax",                       :null => false
    t.integer  "buhinCd"
    t.integer  "torokushaId",               :null => false
    t.integer  "koshinshaId",               :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "mitsumoris", :id => false, :force => true do |t|
    t.integer  "id",            :null => false
    t.integer  "kokyakuId"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "konyuRirekiId"
    t.integer  "mitsumoriNo"
    t.integer  "COL1_1"
    t.integer  "COL2_1"
    t.integer  "COL3_1"
    t.integer  "COL3_2"
    t.integer  "COL3_3"
    t.integer  "COL3_4"
    t.integer  "COL3_5"
    t.integer  "COL3_6"
    t.integer  "COL3_7"
    t.integer  "COL3_8"
    t.integer  "COL3_9"
    t.integer  "COL3_10"
    t.integer  "COL3_11"
    t.integer  "COL3_12"
    t.integer  "COL3_13"
    t.integer  "COL4_1"
    t.integer  "COL5_1"
    t.integer  "COL5_2"
    t.integer  "COL5_3"
    t.integer  "COL5_4"
    t.integer  "COL6_1"
    t.integer  "COL7_1"
    t.integer  "COL7_2"
    t.integer  "COL7_3"
    t.integer  "COL7_4"
    t.integer  "COL7_5"
    t.integer  "COL7_6"
    t.integer  "COL7_7"
    t.integer  "COL8_1"
    t.integer  "COL8_2"
    t.integer  "COL8_3"
    t.integer  "COL9_1"
    t.integer  "COL9_2"
    t.integer  "COL9_3"
    t.integer  "COL10_1"
    t.integer  "COL10_2"
    t.integer  "COL10_3"
    t.integer  "COL10_4"
    t.integer  "COL11_1"
    t.integer  "COL11_2"
    t.integer  "COL11_3"
    t.integer  "COL11_4"
    t.integer  "COL12_1"
    t.integer  "COL13_1"
    t.integer  "COL13_2"
    t.integer  "COL13_3"
    t.integer  "COL13_4"
    t.integer  "COL13_5"
    t.integer  "COL14_1"
    t.integer  "COL14_2"
    t.integer  "COL15_1"
    t.integer  "COL16_1"
    t.integer  "COL16_2"
    t.integer  "COL16_3"
    t.integer  "COL16_4"
    t.integer  "COL16_5"
    t.integer  "COL16_6"
    t.integer  "COL16_7"
    t.integer  "COL16_8"
    t.integer  "COL16_9"
    t.integer  "COL16_10"
    t.integer  "COL16_11"
    t.integer  "COL16_12"
    t.integer  "COL16_13"
    t.integer  "COL17_1"
    t.integer  "COL17_2"
    t.integer  "COL17_3"
    t.integer  "COL17_4"
    t.integer  "COL17_5"
    t.integer  "COL17_6"
    t.integer  "COL17_7"
    t.integer  "COL17_8"
    t.integer  "COL17_9"
    t.integer  "COL17_10"
    t.integer  "COL17_11"
    t.integer  "COL17_12"
    t.integer  "COL17_13"
    t.integer  "COL17_14"
    t.integer  "COL17_15"
    t.integer  "COL18_1"
    t.integer  "COL18_2"
    t.integer  "COL18_3"
    t.integer  "COL18_4"
    t.integer  "COL18_5"
    t.integer  "COL18_6"
    t.integer  "COL18_7"
    t.integer  "COL18_8"
    t.integer  "COL19_1"
    t.integer  "COL19_2"
    t.integer  "COL19_3"
    t.integer  "COL19_4"
    t.integer  "COL19_5"
    t.integer  "COL19_6"
    t.integer  "COL19_7"
    t.integer  "COL19_8"
    t.integer  "COL19_9"
    t.integer  "COL19_10"
    t.integer  "COL19_11"
    t.integer  "COL19_12"
    t.integer  "COL19_13"
    t.integer  "COL19_14"
    t.integer  "COL19_15"
    t.integer  "COL19_16"
    t.integer  "COL19_17"
    t.integer  "COL19_18"
    t.integer  "COL19_19"
    t.integer  "COL20_1"
    t.integer  "COL20_2"
    t.integer  "COL20_3"
    t.integer  "COL20_4"
    t.integer  "COL20_5"
    t.integer  "COL20_6"
    t.integer  "COL20_7"
    t.integer  "COL20_8"
    t.integer  "COL20_9"
    t.integer  "COL20_10"
    t.integer  "COL20_11"
    t.integer  "COL20_12"
    t.integer  "COL21_1"
    t.integer  "COL21_2"
    t.integer  "COL21_3"
    t.integer  "COL21_4"
    t.integer  "COL21_5"
    t.integer  "COL21_6"
    t.integer  "COL22_1"
    t.integer  "COL22_2"
    t.integer  "COL22_3"
    t.integer  "COL23_2"
    t.integer  "COL23_3"
    t.integer  "COL23_4"
    t.integer  "COL23_5"
    t.integer  "COL23_6"
    t.integer  "COL24_1"
    t.integer  "COL24_2"
    t.integer  "COL24_3"
    t.integer  "COL24_4"
    t.integer  "COL24_5"
    t.integer  "COL24_6"
    t.integer  "COL24_7"
    t.integer  "COL24_8"
    t.integer  "COL24_9"
    t.integer  "COL25_1"
    t.integer  "torokushaId"
    t.integer  "koshinshaId"
    t.integer  "COL1_2"
    t.integer  "COL23_1"
    t.integer  "COL7_8"
  end

  create_table "seihins", :primary_key => "seihinId", :force => true do |t|
    t.string   "bunruiCd",    :limit => 50, :null => false
    t.string   "bunruiNm",    :limit => 50
    t.string   "hinmeiCd",    :limit => 50, :null => false
    t.string   "hinmeiNm",    :limit => 50
    t.string   "katashikiCd", :limit => 50, :null => false
    t.string   "katashikiNm", :limit => 50
    t.integer  "koshinshaId",               :null => false
    t.integer  "torokushaId",               :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "sessions", :force => true do |t|
    t.string   "session_id", :null => false
    t.text     "data"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

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
    t.string   "username",                       :null => false
    t.string   "email"
    t.string   "crypted_password"
    t.string   "salt"
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
    t.string   "shainCd",          :limit => 10, :null => false
    t.string   "myoji",            :limit => 50, :null => false
    t.string   "name",             :limit => 50, :null => false
    t.string   "myojiFuri",        :limit => 50, :null => false
    t.string   "nameFuri",         :limit => 50, :null => false
    t.integer  "manageFlg",                      :null => false
    t.integer  "koshinshaId",                    :null => false
    t.integer  "torokushaId",                    :null => false
  end

end
