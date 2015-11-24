json.beer do
  json.extract! @beer, :id, :name, :abv, :ibu, :style, :description
  json.brewery @beer.brewery
  json.create @beer.created_at.strftime("%m/%d/%Y")
  json.check_ins @beer.check_ins.count
  json.uniq_check_ins @beer.check_ins.select(:user_id).distinct.count
  json.monthly @beer.check_ins.where('created_at > ?', 1.month.ago)

  json.rating_count @beer.check_ins.where('rating != 0').count
  json.avg @beer.check_ins.where('rating != 0').average('rating').to_f.round(3)
end
json.likes @beer.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
