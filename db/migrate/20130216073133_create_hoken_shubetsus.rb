class CreateHokenShubetsus < ActiveRecord::Migration
  def change
    create_table :hoken_shubetsus ,:primary_key => 'hokenShubetsuCd' do |t|
      t.integer :hokenShubetsuCd, :null => false
      t.string :hokenShubetsuNm, :limit => 50, :null => false
      t.integer :hyojiJun, :null => false
      t.integer :koshinshaId, :null => false
      t.integer :torokushaId, :null => false

      t.timestamps
    end
  end
end
