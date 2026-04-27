require "test_helper"

class Admin::PaymentMethodsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_payment_method = admin_payment_methods(:one)
  end

  test "should get index" do
    get admin_payment_methods_url, as: :json
    assert_response :success
  end

  test "should create admin_payment_method" do
    assert_difference("Admin::PaymentMethod.count") do
      post admin_payment_methods_url, params: { admin_payment_method: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_payment_method" do
    get admin_payment_method_url(@admin_payment_method), as: :json
    assert_response :success
  end

  test "should update admin_payment_method" do
    patch admin_payment_method_url(@admin_payment_method), params: { admin_payment_method: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_payment_method" do
    assert_difference("Admin::PaymentMethod.count", -1) do
      delete admin_payment_method_url(@admin_payment_method), as: :json
    end

    assert_response :no_content
  end
end
