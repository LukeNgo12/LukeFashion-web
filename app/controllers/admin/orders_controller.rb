class Admin::OrdersController < ApplicationController
  before_action :set_admin_order, only: %i[ show update destroy ]

  # GET /admin/orders
  def index
    @admin_orders = Admin::Order.all

    render json: {}
  end

  # GET /admin/orders/1
  def show
    render json: @admin_order
  end

  # POST /admin/orders
  def create
    @admin_order = Admin::Order.new(admin_order_params)

    if @admin_order.save
      render json: @admin_order, status: :created, location: @admin_order
    else
      render json: @admin_order.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/orders/1
  def update
    if @admin_order.update(admin_order_params)
      render json: @admin_order
    else
      render json: @admin_order.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/orders/1
  def destroy
    @admin_order.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_order
      @admin_order = Admin::Order.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_order_params
      params.fetch(:admin_order, {})
    end
end
