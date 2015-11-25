json.count @search_results.count
json.breweries @search_results.map(:&searchable)
