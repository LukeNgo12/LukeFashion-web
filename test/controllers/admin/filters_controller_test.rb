require "test_helper"

class Admin::FiltersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_filter = admin_filters(:one)
  end

  test "should get index" do
    get admin_filters_url, as: :json
    assert_response :success
  end

  test "should create admin_filter" do
    assert_difference("Admin::Filter.count") do
      post admin_filters_url, params: { admin_filter: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_filter" do
    get admin_filter_url(@admin_filter), as: :json
    assert_response :success
  end

  test "should update admin_filter" do
    patch admin_filter_url(@admin_filter), params: { admin_filter: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_filter" do
    assert_difference("Admin::Filter.count", -1) do
      delete admin_filter_url(@admin_filter), as: :json
    end

    assert_response :no_content
  end
end
