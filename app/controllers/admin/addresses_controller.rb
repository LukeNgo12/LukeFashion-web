class Admin::AddressesController < ApplicationController
  before_action :set_admin_address, only: %i[ show update destroy ]

  # GET /admin/addresses
  def index
    @admin_addresses = Admin::Address.all

    render json: @admin_addresses
  end

  # GET /admin/addresses/1
  def show
    render json: @admin_address
  end

  # POST /admin/addresses
  def create
    @admin_address = Admin::Address.new(admin_address_params)

    if @admin_address.save
      render json: @admin_address, status: :created, location: @admin_address
    else
      render json: @admin_address.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/addresses/1
  def update
    if @admin_address.update(admin_address_params)
      render json: @admin_address
    else
      render json: @admin_address.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/addresses/1
  def destroy
    @admin_address.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_address
      @admin_address = Admin::Address.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_address_params
      params.fetch(:admin_address, {})
    end
end
