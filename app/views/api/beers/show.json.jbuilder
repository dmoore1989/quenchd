json.extract! @beer, :id, :name, :abv, :ibu, :style, :description

json.check_ins do
  json.partial! 'api/check_ins/check_ins', check_ins: @beer.check_ins.order(created_at: :desc)
end
