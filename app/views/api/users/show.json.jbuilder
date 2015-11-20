json.user do
  json.extract! @user, :id, :username, :location, :website, :about
end

json.check_ins do
  json.array! @user.check_ins.order(created_at: :desc) do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
