class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :doc
      t.date :edate

      t.timestamps
    end
  end
end
