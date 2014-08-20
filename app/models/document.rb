# == Schema Information
#
# Table name: documents
#
#  id         :integer         not null, primary key
#  empno      :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  sig        :string(255)
#  passport   :string(255)
#  iqama      :string(255)
#  visa       :string(255)
#
class Document < ActiveRecord::Base
  attr_accessible :empno,:visa,:sig,:passport,:iqama
  #mount_uploader :visa, VisaUploader
  #mount_uploader :sig, SigUploader
  #mount_uploader :passport, PassportUploader
  #mount_uploader :iqama, IqamaUploader
  #has_attachment :sig, accept: [:jpg, :png,:jpeg]
  #has_attachment :passport, accept: [:jpg, :png,:jpeg]
  #has_attachment :iqama, accept: [:jpg, :png,:jpeg]
  #has_attachment :visa, accept: [:jpg, :png,:jpeg]
end


