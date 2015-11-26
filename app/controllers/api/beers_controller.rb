class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all()
    render 'index'
  end

  def show
    @beer = Beer
      .includes(:likes, :check_ins)
      .find(params[:id])
    @check_ins = @beer
      .check_ins
      .includes({comments: [:commenter]}, :beer, :brewery, :venue, :user, :likes)
      .order(created_at: :desc)
      .page(params[:page_number])
      .per(10)
    render :show
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save!
      render json: {id: @beer.id}
    else
      render json: {id: @beer.errors.full_messages}
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
    params.require(:beer).permit(:name, :image, :abv, :ibu, :style, :description, :brewery_id)
  end

end
