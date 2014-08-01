class Document < ActiveRecord::Base
  attr_accessible :empno,:visa,:sig,:passport,:iqama
  mount_uploader :visa, ImageUploader
  mount_uploader :sig, ImageUploader
  mount_uploader :passport, ImageUploader
  mount_uploader :iqama, ImageUploader
end
