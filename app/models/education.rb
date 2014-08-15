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

class Education < ActiveRecord::Base
  attr_accessible :deg, :degyear, :edtype, :empno, :special, :verby, :verified
  validates :empno, presence: true, uniqueness:{ case_sensitive: false }
  def self.to_csv()
    CSV.generate() do |csv|
      csv << column_names
      all.each do |education|
        csv << education.attributes.values_at(*column_names)
      end
    end
  end 

end
