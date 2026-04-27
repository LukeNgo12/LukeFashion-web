require "test_helper"

class Admin::CountriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_country = admin_countries(:one)
  end

  test "should get index" do
    get admin_countries_url, as: :json
    assert_response :success
  end

  test "should create admin_country" do
    assert_difference("Admin::Country.count") do
      post admin_countries_url, params: { admin_country: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_country" do
    get admin_country_url(@admin_country), as: :json
    assert_response :success
  end

  test "should update admin_country" do
    patch admin_country_url(@admin_country), params: { admin_country: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_country" do
    assert_difference("Admin::Country.count", -1) do
      delete admin_country_url(@admin_country), as: :json
    end

    assert_response :no_content
  end
end
