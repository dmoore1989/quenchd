json.user do
  json.extract! @user, :id, :username, :location, :website, :about
  json.joined check_in.created_at.strftime("%m/%d/%Y")
end



json.check_ins do
  count = @user.check_ins.count
  unique_count = @user.check_ins.count('beer_id', distinct: true)

  json.array! @user.check_ins.order(created_at: :desc) do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
