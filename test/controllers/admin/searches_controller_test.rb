require "test_helper"

class Admin::SearchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_search = admin_searches(:one)
  end

  test "should get index" do
    get admin_searches_url, as: :json
    assert_response :success
  end

  test "should create admin_search" do
    assert_difference("Admin::Search.count") do
      post admin_searches_url, params: { admin_search: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_search" do
    get admin_search_url(@admin_search), as: :json
    assert_response :success
  end

  test "should update admin_search" do
    patch admin_search_url(@admin_search), params: { admin_search: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_search" do
    assert_difference("Admin::Search.count", -1) do
      delete admin_search_url(@admin_search), as: :json
    end

    assert_response :no_content
  end
end
