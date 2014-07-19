# == Schema Information
#
# Table name: educations
#
#  id         :integer         not null, primary key
#  empno      :string(255)
#  edtype     :string(255)
#  degyear    :string(255)
#  deg        :string(255)
#  special    :string(255)
#  verified   :boolean
#  verby      :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

require 'test_helper'

class EducationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
