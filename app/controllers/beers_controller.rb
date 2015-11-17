class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all()
    render :index
  end

  def show
    @beer = Beer.find(params[:id])
    render :show
  end

  def new
    @beer = Beer.new
    render :new
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save
      redirect_to beer_url(@beer)
    else
      flash.now[:error] = @beer.errors.full_messages
      render :new
    end
  end

  def edit
    @beer = Beer.find(params[:id])
    render :edit
  end

  def update
    @beer = Beer.find(params[:id])

    if @beer.update_attributes
      redirect_to beer_url(@beer)
    else
      flash.now[:error] = @beer.errors.full_messages
      render :edit
    end
  end

  def destroy
    @beer = Beer.find(params[:id]).destroy
    flash[:notice] = ["#{@beer} deleted!!!"]
  end

end
