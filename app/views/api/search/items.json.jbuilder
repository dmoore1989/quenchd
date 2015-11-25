json.count @search_results.count
json.items @search_results.map(&:searchable)
