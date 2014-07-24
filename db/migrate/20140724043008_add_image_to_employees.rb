class AddImageToEmployees < ActiveRecord::Migration
  def change
    add_column :employees, :image, :string
  end
end
