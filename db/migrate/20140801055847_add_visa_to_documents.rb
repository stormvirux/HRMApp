class AddVisaToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :visa, :string
  end
end
