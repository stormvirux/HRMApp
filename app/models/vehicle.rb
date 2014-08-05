class Vehicle < ActiveRecord::Base
  attr_accessible :dname, :isthiedate, :model, :nextsdate, :reg, :remarks
end
# == Schema Information
#
# Table name: vehicles
#
#  id         :integer         not null, primary key
#  reg        :string(255)
#  model      :string(255)
#  isthiedate :date
#  dname      :string(255)
#  nextsdate  :date
#  remarks    :text
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

