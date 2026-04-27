class Admin::CartsController < ApplicationController
  before_action :set_admin_cart, only: %i[ show update destroy ]

  # GET /admin/carts
  def index
    @admin_carts = Admin::Cart.all

    render json: @admin_carts
  end

  # GET /admin/carts/1
  def show
    render json: @admin_cart
  end

  # POST /admin/carts
  def create
    @admin_cart = Admin::Cart.new(admin_cart_params)

    if @admin_cart.save
      render json: @admin_cart, status: :created, location: @admin_cart
    else
      render json: @admin_cart.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/carts/1
  def update
    if @admin_cart.update(admin_cart_params)
      render json: @admin_cart
    else
      render json: @admin_cart.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/carts/1
  def destroy
    @admin_cart.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_cart
      @admin_cart = Admin::Cart.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_cart_params
      params.fetch(:admin_cart, {})
    end
end
