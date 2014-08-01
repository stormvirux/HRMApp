class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :empno

      t.timestamps
    end
  end
end
