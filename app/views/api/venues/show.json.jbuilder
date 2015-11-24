json.venue do
  json.extract! @venue, :id, :name, :address
  json.create @venue.created_at.strftime("%m/%d/%Y")
end

json.likes @venue.likes

json.check_ins do
  json.array! @venue.check_ins.order(created_at: :desc) do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
