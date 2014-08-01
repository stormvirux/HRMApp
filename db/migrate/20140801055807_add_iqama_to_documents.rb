class AddIqamaToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :iqama, :string
  end
end
