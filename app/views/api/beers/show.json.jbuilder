json.beer do
  json.extract! @beer, :id, :name, :abv, :ibu, :style, :description
  json.brewery @beer.brewery
  json.create @beer.created_at.strftime("%m/%d/%Y")
  json.check_ins @check_ins.count
  json.uniq_check_ins @check_ins.select(:user_id).distinct.count
  json.monthly @check_ins.where('created_at > ?', 1.month.ago).count
  json.current_user_check_in @check_ins.where('user_id = ?', current_user.id)

  json.rating_count @check_ins.where('rating != 0').count
  json.avg @check_ins.where('rating != 0').average('rating').to_f.round(3)
end
json.likes @beer.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
