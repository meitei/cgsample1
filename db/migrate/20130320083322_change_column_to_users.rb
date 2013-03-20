class ChangeColumnToUsers < ActiveRecord::Migration
  def up
  	  change_column :users, :shainCd, :string, :null => false, :limit => 10
      change_column :users, :myoji, :string, :null => false, :limit => 50
      change_column :users, :name, :string, :null => false, :limit => 50
      change_column :users, :myojiFuri, :string, :null => false, :limit => 50
      change_column :users, :nameFuri, :string, :null => false, :limit => 50
      change_column :users, :manageFlg, :integer, :null => false
      change_column :users, :koshinshaId, :integer, :null => false
      change_column :users, :torokushaId, :integer, :null => false
  end

  def down
  	  change_column :users, :shainCd, :string
      change_column :users, :myoji, :string
      change_column :users, :name, :string
      change_column :users, :myojiFuri, :string
      change_column :users, :nameFuri, :string
      change_column :users, :manageFlg, :integer
      change_column :users, :koshinshaId, :integer
      change_column :users, :torokushaId, :integer
  end
end
