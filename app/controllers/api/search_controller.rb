class Api::SearchController < ApplicationController
  def index
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
  end

  def beers
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
      .where("searchable_type = 'Beer'")
    render :items
  end

  def breweries
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
      .where("searchable_type = 'Brewery'")
    render :items
  end

  def venues
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
      .where("searchable_type = 'Venue'")
    render :items
  end

end
