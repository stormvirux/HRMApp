class AddSigToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :sig, :string
  end
end
