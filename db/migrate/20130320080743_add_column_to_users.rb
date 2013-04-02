class AddColumnToUsers < ActiveRecord::Migration
  def change
  	  add_column :users, :shainCd, :string
      add_column :users, :myoji, :string
      add_column :users, :name, :string
      add_column :users, :myojiFuri, :string
      add_column :users, :nameFuri, :string
      add_column :users, :manageFlg, :integer
      add_column :users, :koshinshaId, :integer
      add_column :users, :torokushaId, :integer
  end
end
