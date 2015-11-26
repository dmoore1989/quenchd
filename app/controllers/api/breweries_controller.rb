class Api::BreweriesController < ApplicationController
  def show
    @brewery = Brewery
      .includes(:likes, :check_ins)
      .find(params[:id])
    @check_ins = @brewery
      .check_ins
      .includes({comments: [:commenter]}, :beer, :brewery, :venue, :user, :likes)
      .order(created_at: :desc)
      .page(params[:page_number])
      .per(10)
    render :show
  end

  def create
    @brewery = Brewery.new(brewery_params)

    if @brewery.save!
      render json: {id: @brewery.id}
    else
      render json: {id: @brewery.errors.full_messages}
    end
  end

  def brewery_params
    params.require(:brewery).permit(:name, :image, :location)
  end
end
