class Api::BreweriesController < ApplicationController
  def show
    @brewery = Brewery.find(params[:id])
    render :show
  end

end
