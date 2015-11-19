json.user do
  json.extract! (@user, :id, :username, :location, :website, :about)
end

json.check_ins do
  json.partial! 'api/check_ins/check-ins', check_ins: @user.check_ins
end
