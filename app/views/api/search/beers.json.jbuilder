json.count @search_results.count
json.beers @search_results.map(&:searchable)
