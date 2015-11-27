json.brewery do
  json.extract! @brewery, :id, :name, :location
  json.breweryImage asset_path(@brewery.image.url(:title))
  json.create @brewery.created_at.strftime("%m/%d/%Y")

  json.check_ins @check_ins.count
  json.uniq_check_ins @check_ins.select(:user_id).distinct.count
  json.monthly @check_ins.where('check_ins.created_at > ?', 1.month.ago).count
  json.current_user_check_in @check_ins.where('user_id = ?', current_user.id).count
  brewery_likers = @brewery.likers.limit(16).map do |liker|
    asset_path(liker.image.url)
  end
  json.likes brewery_likers

  json.beers @brewery.beers

  json.rating_count @check_ins.where('rating != 0').count
  json.avg @check_ins.where('rating != 0').average('rating').to_f.round(3)
end

json.likes @brewery.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in, comments: check_in.comments
  end
end
