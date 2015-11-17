json.beer do
  json.name @beer.name
  json.abv @beer.abv
  json.ibu  @beer.ibu
  json.style @beer.style
  json.description @beer.description
  json.brewery @beer.brewery
end

json.partial! 'check_ins/check_ins', @beer.check_ins
