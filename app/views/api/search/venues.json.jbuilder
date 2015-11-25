json.count @search_results.count
json.venues @search_results.map(&:searchable)
