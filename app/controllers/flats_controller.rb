class FlatsController < ApplicationController
  before_action :params_id, only: %i[show edit update destroy]

  def index
    @flats = Flat.all 
  end

  def show
    @markers =
      [{
        lat: @flat.latitude,
        lng: @flat.longitude
      }]

  end

  def new
    @flat = Flat.new
  end

  def create
    @flat = Flat.new(flat_params)
    if @flat.save
      redirect_to flats_path
    else
      redirect_to new_flat_path
    end
  end

  def edit
  end

  def update
    @flat.update(flat_params)
    redirect_to flats_path
  end

  def destroy
    @flat.destroy
    redirect_to flats_path, status: :see_other
  end

  private

  def params_id
    @flat = Flat.find(params[:id])
  end

  def flat_params
    params.require(:flat).permit(:name, :address, :description, :price_per_night, :number_of_guests, photos: [])
  end
end
