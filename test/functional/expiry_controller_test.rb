require 'test_helper'

class ExpiryControllerTest < ActionController::TestCase
  test "should get expshow" do
    get :expshow
    assert_response :success
  end

end
