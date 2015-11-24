json.brewery do
  json.extract! @brewery, :id, :name, :location
  json.create @brewery.created_at.strftime("%m/%d/%Y")
end

json.likes @brewery.likes

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in, comments: check_in.comments
  end
end
