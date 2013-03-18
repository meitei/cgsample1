class RemakeToUsers < ActiveRecord::Migration
  def up
  	drop_table :users

  	create_table :users, :primary_key => 'shainId' do |t|
      t.integer :shainId, :null => false
      t.string :shainCd, :null => false, :limit => 10
      t.string :myoji, :null => false, :limit => 50
      t.string :name, :null => false, :limit => 50
      t.string :myojiFuri, :null => false, :limit => 50
      t.string :nameFuri, :null => false, :limit => 50
      t.string :loginId, :null => false, :limit => 50
      t.string :loginPassword, :null => false, :limit => 50
      t.integer :manageFlg, :null => false
      t.integer :koshinshaId, :null => false
      t.integer :torokushaId, :null => false
      t.date :loginLastDt
      t.timestamps
    end
  end

  def down
  	drop_table :users

    create_table :users do |t|
      t.string :username,         :null => false  # if you use another field as a username, for example email, you can safely remove this field.
      t.string :email,            :default => nil # if you use this field as a username, you might want to make it :null => false.
      t.string :crypted_password, :default => nil
      t.string :salt,             :default => nil

      t.timestamps
    end
  end
end
