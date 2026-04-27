class Admin::AuthsController < ApplicationController
  before_action :set_admin_auth, only: %i[ show update destroy ]

  # GET /admin/auths
  def index
    @admin_auths = Admin::Auth.all

    render json: @admin_auths
  end

  # GET /admin/auths/1
  def show
    render json: @admin_auth
  end

  # POST /admin/auths
  def create
    @admin_auth = Admin::Auth.new(admin_auth_params)

    if @admin_auth.save
      render json: @admin_auth, status: :created, location: @admin_auth
    else
      render json: @admin_auth.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/auths/1
  def update
    if @admin_auth.update(admin_auth_params)
      render json: @admin_auth
    else
      render json: @admin_auth.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/auths/1
  def destroy
    @admin_auth.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_auth
      @admin_auth = Admin::Auth.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_auth_params
      params.fetch(:admin_auth, {})
    end
end
