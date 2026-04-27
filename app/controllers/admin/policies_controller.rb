class Admin::PoliciesController < ApplicationController
  before_action :set_admin_policy, only: %i[ show update destroy ]

  # GET /admin/policies
  def index
    @admin_policies = Admin::Policy.all

    render json: @admin_policies
  end

  # GET /admin/policies/1
  def show
    render json: @admin_policy
  end

  # POST /admin/policies
  def create
    @admin_policy = Admin::Policy.new(admin_policy_params)

    if @admin_policy.save
      render json: @admin_policy, status: :created, location: @admin_policy
    else
      render json: @admin_policy.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/policies/1
  def update
    if @admin_policy.update(admin_policy_params)
      render json: @admin_policy
    else
      render json: @admin_policy.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/policies/1
  def destroy
    @admin_policy.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_policy
      @admin_policy = Admin::Policy.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_policy_params
      params.fetch(:admin_policy, {})
    end
end
