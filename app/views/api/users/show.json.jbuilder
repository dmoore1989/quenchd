json.user do
  json.extract! @user, :id, :username, :location, :website, :about
  json.joined @user.created_at.strftime("%m/%d/%Y")
  json.count @user.check_ins.count
  json.uniqueCount @user.check_ins.select(:beer_id).distinct.count(:beer_id)
end



json.check_ins do

  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
