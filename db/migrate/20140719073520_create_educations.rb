class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.string :empno
      t.string :edtype
      t.string :degyear
      t.string :deg
      t.string :special
      t.boolean :verified
      t.string :verby

      t.timestamps
    end
  end
end
