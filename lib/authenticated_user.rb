class AuthenticatedUser < Struct.new(:value)
  def matches?(request)
    request.cookies.key?("remember_token") == value
  end
end
