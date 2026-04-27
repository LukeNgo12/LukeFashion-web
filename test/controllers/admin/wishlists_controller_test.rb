require "test_helper"

class Admin::WishlistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_wishlist = admin_wishlists(:one)
  end

  test "should get index" do
    get admin_wishlists_url, as: :json
    assert_response :success
  end

  test "should create admin_wishlist" do
    assert_difference("Admin::Wishlist.count") do
      post admin_wishlists_url, params: { admin_wishlist: {} }, as: :json
    end

    assert_response :created
  end

  test "should show admin_wishlist" do
    get admin_wishlist_url(@admin_wishlist), as: :json
    assert_response :success
  end

  test "should update admin_wishlist" do
    patch admin_wishlist_url(@admin_wishlist), params: { admin_wishlist: {} }, as: :json
    assert_response :success
  end

  test "should destroy admin_wishlist" do
    assert_difference("Admin::Wishlist.count", -1) do
      delete admin_wishlist_url(@admin_wishlist), as: :json
    end

    assert_response :no_content
  end
end
