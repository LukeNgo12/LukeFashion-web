require "test_helper"

class Admin::AddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_address = admin_addresses(:one)
  end

  test "should get index" do
    get admin_addresses_url, as: :json
    assert_response :success
  end

  test "should create admin_address" do
    assert_difference("Admin::Address.count") do
      post admin_addresses_url, params: { admin_address: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_address" do
    get admin_address_url(@admin_address), as: :json
    assert_response :success
  end

  test "should update admin_address" do
    patch admin_address_url(@admin_address), params: { admin_address: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_address" do
    assert_difference("Admin::Address.count", -1) do
      delete admin_address_url(@admin_address), as: :json
    end

    assert_response :no_content
  end
end
