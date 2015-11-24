beers = @search_results.where('searchable_type = ?', "Beer")
breweries = @search_results.where('searchable_type = ?', "Brewery")
venues = @search_results.where('searchable_type = ?', "Venue")

json.beers do
  json.count beers.count
  json.samples beers[0..2].map(&:searchable)
end

json.brewery do
  json.count breweries.count
  json.samples breweries[0..2].map(&:searchable)
end

json.venue do
  json.count venues.count
  json.samples venues[0..2].map(&:searchable)
end
