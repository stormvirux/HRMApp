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
  validates :first_name, presence: true , length: { maximum: 50 }
  validates :empno, presence: true, uniqueness:{ case_sensitive: false }
  validates_length_of :empno, :minimum => 5, :maximum => 5
  validates  :iqamano, presence: true
  validates  :iqedate, presence: true
  validates  :iqidate, presence: true
  validates  :passportno, presence: true
  validates  :pedate, presence: true
  validates :pidate, presence: true
  validates :vedate, presence: true
  validates  :vidate, presence: true
  validates  :visano, presence: true
  
#  scope :date_pexp, lambda{|pedate|
#  if pedate.present?
#    where( :date_exp =>  ((Date.today - pedate).to_i))
#  end
#}
  ransacker :date_pexp, :formatter => proc {|v| v<:pedate} do |parent|
    parent.table[:pedate]
  end
#   ransacker :date_pexp do |parent|
#     Arel::Nodes::InfixOperation.new('-',Date.today,parent.table[:pedate])
#   end
# ransacker :date_pexp do |r|
#   Arel::Nodes::SqlLiteral.new("DATEDIFF(`employees`.`pedate`,'Date.today')")
#  end  
end
