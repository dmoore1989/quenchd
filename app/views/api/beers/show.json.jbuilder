json.beer do
  json.extract! @beer, :id, :name, :abv, :ibu, :style, :description
  json.brewery @beer.brewery
  json.create @beer.created_at.strftime("%m/%d/%Y")
end
json.likes @beer.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
