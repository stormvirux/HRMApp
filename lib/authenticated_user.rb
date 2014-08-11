class AuthenticatedUser 
  def self.matches?(request)
	  self.signed_in?
  end
end