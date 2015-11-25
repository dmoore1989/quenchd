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
  end

  def breweries
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
      .where("searchable_type = 'Brewery'")
  end

  def venues
    @search_results = PgSearch
      .multisearch(params[:query])
      .includes(:searchable)
      .where("searchable_type = 'Venue'")
  end

end
