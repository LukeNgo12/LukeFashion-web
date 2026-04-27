require "test_helper"

class Admin::CartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_cart = admin_carts(:one)
  end

  test "should get index" do
    get admin_carts_url, as: :json
    assert_response :success
  end

  test "should create admin_cart" do
    assert_difference("Admin::Cart.count") do
      post admin_carts_url, params: { admin_cart: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_cart" do
    get admin_cart_url(@admin_cart), as: :json
    assert_response :success
  end

  test "should update admin_cart" do
    patch admin_cart_url(@admin_cart), params: { admin_cart: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_cart" do
    assert_difference("Admin::Cart.count", -1) do
      delete admin_cart_url(@admin_cart), as: :json
    end

    assert_response :no_content
  end
end
