require "test_helper"

class Admin::OrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_order = admin_orders(:one)
  end

  test "should get index" do
    get admin_orders_url, as: :json
    assert_response :success
  end

  test "should create admin_order" do
    assert_difference("Admin::Order.count") do
      post admin_orders_url, params: { admin_order: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_order" do
    get admin_order_url(@admin_order), as: :json
    assert_response :success
  end

  test "should update admin_order" do
    patch admin_order_url(@admin_order), params: { admin_order: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_order" do
    assert_difference("Admin::Order.count", -1) do
      delete admin_order_url(@admin_order), as: :json
    end

    assert_response :no_content
  end
end
