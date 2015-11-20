json.array! @check_ins do |check_in|
  json.partial! 'api/check_ins/check_ins', check_in: check_in
end
