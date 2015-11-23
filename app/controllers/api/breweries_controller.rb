class Api::BreweriesController < ApplicationController
  def show
    @beer = Beer.find(params[:id])
    render :show
  end

end
