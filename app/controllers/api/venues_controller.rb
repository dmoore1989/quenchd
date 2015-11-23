class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.find(params[:id])

    render :show
  end
end
