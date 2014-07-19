# == Schema Information
#
# Table name: employees
#
#  id          :integer         not null, primary key
#  empno       :string(255)
#  first_name  :string(255)
#  middle_name :string(255)
#  last_name   :string(255)
#  gender      :string(255)
#  dob         :date
#  passportno  :string(255)
#  pidate      :date
#  pedate      :date
#  iqamano     :string(255)
#  iqidate     :date
#  iqedate     :date
#  insuranceno :string(255)
#  iidate      :date
#  iedate      :date
#  visano      :string(255)
#  vidate      :date
#  vedate      :date
#  Marstatus   :string(255)
#  religion    :string(255)
#  nationality :string(255)
#  civstatus   :string(255)
#  designation :string(255)
#  department  :string(255)
#  speciali    :string(255)
#  exp         :string(255)
#  email       :string(255)
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#

class Employee < ActiveRecord::Base
  attr_accessible :Marstatus, :civstatus, :department, :designation, :dob, :email, :empno, :exp, :first_name, :gender, :iedate, :iidate, :insuranceno, :iqamano, :iqedate, :iqidate, :last_name, :middle_name, :nationality, :passportno, :pedate, :pidate, :religion, :speciali, :vedate, :vidate, :visano
end
