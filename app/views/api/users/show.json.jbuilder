json.user do
  json.extract! @user, :id, :username, :location, :website, :about
  json.joined @user.created_at.strftime("%m/%d/%Y")
end



json.check_ins do
  count = @check_ins.count
  unique_count = @check_ins.count('beer_id', distinct: true)

  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
