require "test_helper"

class Admin::PoliciesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_policy = admin_policies(:one)
  end

  test "should get index" do
    get admin_policies_url, as: :json
    assert_response :success
  end

  test "should create admin_policy" do
    assert_difference("Admin::Policy.count") do
      post admin_policies_url, params: { admin_policy: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_policy" do
    get admin_policy_url(@admin_policy), as: :json
    assert_response :success
  end

  test "should update admin_policy" do
    patch admin_policy_url(@admin_policy), params: { admin_policy: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_policy" do
    assert_difference("Admin::Policy.count", -1) do
      delete admin_policy_url(@admin_policy), as: :json
    end

    assert_response :no_content
  end
end
