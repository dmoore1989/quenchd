json.beer do
  json.extract! @beer, :id, :name, :abv, :ibu, :style, :description
end

json.check_ins do
  json.array! @beer.check_ins.order(created_at: :desc) do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
