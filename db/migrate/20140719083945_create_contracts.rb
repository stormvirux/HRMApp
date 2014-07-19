class CreateContracts < ActiveRecord::Migration
  def change
    create_table :contracts do |t|
      t.string :htype
      t.string :status
      t.date :cstart
      t.date :cend
      t.date :pstart
      t.date :pend
      t.string :nameiqama
      t.string :proiqama

      t.timestamps
    end
  end
end
