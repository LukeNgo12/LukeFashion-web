class Admin::PaymentMethodsController < ApplicationController
  before_action :set_admin_payment_method, only: %i[ show update destroy ]

  # GET /admin/payment_methods
  def index
    @admin_payment_methods = Admin::PaymentMethod.all

    render json: @admin_payment_methods
  end

  # GET /admin/payment_methods/1
  def show
    render json: @admin_payment_method
  end

  # POST /admin/payment_methods
  def create
    @admin_payment_method = Admin::PaymentMethod.new(admin_payment_method_params)

    if @admin_payment_method.save
      render json: @admin_payment_method, status: :created, location: @admin_payment_method
    else
      render json: @admin_payment_method.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/payment_methods/1
  def update
    if @admin_payment_method.update(admin_payment_method_params)
      render json: @admin_payment_method
    else
      render json: @admin_payment_method.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/payment_methods/1
  def destroy
    @admin_payment_method.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_payment_method
      @admin_payment_method = Admin::PaymentMethod.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_payment_method_params
      params.fetch(:admin_payment_method, {})
    end
end
