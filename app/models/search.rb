class Search < ActiveRecord::Base
  attr_accessible :doc, :edate
  
  def employees
    @employees ||= find_employees
  end
  
  private

    def find_employees
      employees = Employee.order(:empno)
      employees = employees.where("#{doc} <= ?", edate) if edate.present? and doc.present?
      employees
   end
end
# == Schema Information
#
# Table name: searches
#
#  id         :integer         not null, primary key
#  doc        :string(255)
#  edate      :date
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

