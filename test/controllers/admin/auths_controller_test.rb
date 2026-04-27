require "test_helper"

class Admin::AuthsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_auth = admin_auths(:one)
  end

  test "should get index" do
    get admin_auths_url, as: :json
    assert_response :success
  end

  test "should create admin_auth" do
    assert_difference("Admin::Auth.count") do
      post admin_auths_url, params: { admin_auth: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_auth" do
    get admin_auth_url(@admin_auth), as: :json
    assert_response :success
  end

  test "should update admin_auth" do
    patch admin_auth_url(@admin_auth), params: { admin_auth: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_auth" do
    assert_difference("Admin::Auth.count", -1) do
      delete admin_auth_url(@admin_auth), as: :json
    end

    assert_response :no_content
  end
end
