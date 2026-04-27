class Admin::CountriesController < ApplicationController
  before_action :set_admin_country, only: %i[ show update destroy ]

  # GET /admin/countries
  def index
    @admin_countries = Admin::Country.all

    render json: @admin_countries
  end

  # GET /admin/countries/1
  def show
    render json: @admin_country
  end

  # POST /admin/countries
  def create
    @admin_country = Admin::Country.new(admin_country_params)

    if @admin_country.save
      render json: @admin_country, status: :created, location: @admin_country
    else
      render json: @admin_country.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /admin/countries/1
  def update
    if @admin_country.update(admin_country_params)
      render json: @admin_country
    else
      render json: @admin_country.errors, status: :unprocessable_content
    end
  end

  # DELETE /admin/countries/1
  def destroy
    @admin_country.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_country
      @admin_country = Admin::Country.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_country_params
      params.fetch(:admin_country, {})
    end
end
