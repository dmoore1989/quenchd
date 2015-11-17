json.beer do
  json.name @beer.name
  json.abv @beer.abv
  json.ibu  @beer.ibu
  json.style @beer.style
  json.description @beer.description
end

json.partial! 'api/check_ins/check_ins', check_ins: @beer.check_ins
