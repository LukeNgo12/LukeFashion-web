class Admin::WishlistsController < ApplicationController
  before_action :set_admin_wishlist, only: %i[ show update destroy ]

  # GET /admin/wishlists
  def index
    @admin_wishlists = Admin::Wishlist.all

    render json: @admin_wishlists
  end

  # GET /admin/wishlists/1
  def show
    render json: @admin_wishlist
  end

  # POST /admin/wishlists
  def create
    @admin_wishlist = Admin::Wishlist.new(admin_wishlist_params)

    if @admin_wishlist.save
      render json: @admin_wishlist, status: :created, location: @admin_wishlist
    else
      render json: @admin_wishlist.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/wishlists/1
  def update
    if @admin_wishlist.update(admin_wishlist_params)
      render json: @admin_wishlist
    else
      render json: @admin_wishlist.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/wishlists/1
  def destroy
    @admin_wishlist.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_wishlist
      @admin_wishlist = Admin::Wishlist.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_wishlist_params
      params.fetch(:admin_wishlist, {})
    end
end
