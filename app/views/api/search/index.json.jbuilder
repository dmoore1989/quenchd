beers = @search_results.where('searchable_type = Beer')
breweries = @search_results.where('searchable_type = Brewery')
venues = @search_results.where('searchable_type = Venue')

json.beer do
  json.beer_count beers.count
  json.beer_samples beers[0..2]
end

json.brewery do
  json.brewery_count breweries.count
  json.brewery_samples breweries[0..2]
end

json.venue do
  json.venue_count venues.count
  json.venue_samples venues[0..2]
end
