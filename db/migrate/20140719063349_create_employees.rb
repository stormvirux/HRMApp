class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :empno
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :gender
      t.date :dob
      t.string :passportno
      t.date :pidate
      t.date :pedate
      t.string :iqamano
      t.date :iqidate
      t.date :iqedate
      t.string :insuranceno
      t.date :iidate
      t.date :iedate
      t.string :visano
      t.date :vidate
      t.date :vedate
      t.string :Marstatus
      t.string :religion
      t.string :nationality
      t.string :civstatus
      t.string :designation
      t.string :department
      t.string :speciali
      t.string :exp
      t.string :email

      t.timestamps
    end
  end
end
