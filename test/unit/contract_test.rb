# == Schema Information
#
# Table name: contracts
#
#  id         :integer         not null, primary key
#  empno      :string(255)
#  htype      :string(255)
#  status     :string(255)
#  cstart     :date
#  cend       :date
#  pstart     :date
#  pend       :date
#  nameiqama  :string(255)
#  proiqama   :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

require 'test_helper'

class ContractTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
