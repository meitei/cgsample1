class CreateShains < ActiveRecord::Migration

  def change
    create_table :shains, :primary_key => 'shainId' do |t|
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

      t.timestamps

    end
  end
end
