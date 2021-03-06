json.venue do
  json.extract! @venue, :id, :name, :address
  json.venueImage asset_path(@venue.image.url(:title))
  json.create @venue.created_at.strftime("%m/%d/%Y")

  json.check_ins @check_ins.count
  json.uniq_check_ins @check_ins.select(:user_id).distinct.count
  json.monthly @check_ins.where('check_ins.created_at > ?', 1.month.ago).count
  json.current_user_check_in @check_ins.where('user_id = ?', current_user.id).count
end

json.likes @venue.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
