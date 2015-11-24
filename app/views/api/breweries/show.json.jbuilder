json.brewery do
  json.extract! @brewery, :id, :name, :location
  json.create @brewery.created_at.strftime("%m/%d/%Y")
end

json.likes @brewery.likes

json.check_ins do
  json.array! @brewery.check_ins.order(created_at: :desc) do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
