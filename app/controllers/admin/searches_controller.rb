class Admin::SearchesController < ApplicationController
  before_action :set_admin_search, only: %i[ show update destroy ]

  # GET /admin/searches
  def index
    @admin_searches = Admin::Search.all

    render json: @admin_searches
  end

  # GET /admin/searches/1
  def show
    render json: @admin_search
  end

  # POST /admin/searches
  def create
    @admin_search = Admin::Search.new(admin_search_params)

    if @admin_search.save
      render json: @admin_search, status: :created, location: @admin_search
    else
      render json: @admin_search.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/searches/1
  def update
    if @admin_search.update(admin_search_params)
      render json: @admin_search
    else
      render json: @admin_search.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/searches/1
  def destroy
    @admin_search.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_search
      @admin_search = Admin::Search.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_search_params
      params.fetch(:admin_search, {})
    end
end
