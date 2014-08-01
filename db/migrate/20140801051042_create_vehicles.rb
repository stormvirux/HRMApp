class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.string :reg
      t.string :model
      t.date :isthiedate
      t.string :dname
      t.date :nextsdate
      t.text :remarks

      t.timestamps
    end
  end
end
