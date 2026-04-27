class Admin::FiltersController < ApplicationController
  before_action :set_admin_filter, only: %i[ show update destroy ]

  # GET /admin/filters
  def index
    @admin_filters = Admin::Filter.all

    render json: @admin_filters
  end

  # GET /admin/filters/1
  def show
    render json: @admin_filter
  end

  # POST /admin/filters
  def create
    @admin_filter = Admin::Filter.new(admin_filter_params)

    if @admin_filter.save
      render json: @admin_filter, status: :created, location: @admin_filter
    else
      render json: @admin_filter.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/filters/1
  def update
    if @admin_filter.update(admin_filter_params)
      render json: @admin_filter
    else
      render json: @admin_filter.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/filters/1
  def destroy
    @admin_filter.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_filter
      @admin_filter = Admin::Filter.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_filter_params
      params.fetch(:admin_filter, {})
    end
end
