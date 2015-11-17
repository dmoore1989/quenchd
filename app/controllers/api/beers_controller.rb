class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all()
    render 'index'
  end

  def show
    @beer = Beer.find(params[:id])
    render :show
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save
      render json: beer
    else
      flash.now[:error] = @beer.errors.full_messages
    end
  end

  def update
    @beer = Beer.find(params[:id])

    if @beer.update_attributes
      redirect_to beer_url(@beer)
    else
      flash.now[:error] = @beer.errors.full_messages
    end
  end

  def destroy
    @beer = Beer.find(params[:id]).destroy
    flash[:notice] = ["#{@beer} deleted!!!"]
  end

  def beer_params
    params.require(:beer).permit(:user_id,
      :beer_id, :venue_id, :rating, :review)
  end

end
