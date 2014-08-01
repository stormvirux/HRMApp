class AddPassportToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :passport, :string
  end
end
