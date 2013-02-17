class CreateMitsumoris < ActiveRecord::Migration
  def change
    create_table :mitsumoris do |t|
      t.integer :mitsumoriId
      t.integer :kokyakuId

      t.timestamps
    end
  end
end
