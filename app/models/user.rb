# == Schema Information
#
# Table name: users
#
#  id              :integer         not null, primary key
#  name            :string(255)
#  password_digest :string(255)
#  created_at      :datetime        not null
#  updated_at      :datetime        not null
#  remember_token  :string(255)
#

class User < ActiveRecord::Base
  attr_accessible :name,:password,:remember_token
  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }
  validates :name, presence: true, uniqueness:{ case_sensitive: false }
  before_save :create_remember_token
  private
    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
