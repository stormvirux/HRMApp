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

class Contract < ActiveRecord::Base
  attr_accessible :cend, :cstart, :empno, :htype, :nameiqama, :pend, :proiqama, :pstart, :status
  validates :empno, presence: true, uniqueness:{ case_sensitive: false }
  def self.to_csv()
    CSV.generate() do |csv|
      csv << column_names
      all.each do |contract|
        csv << contract.attributes.values_at(*column_names)
      end
    end
  end 

end
