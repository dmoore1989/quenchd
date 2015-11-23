if @like.likeable_type == "CheckIn"
  json.partial! 'api/check_ins/check_ins', check_in: @like.likeable
else
  json.extract! @like, :id, :liker_id, :likeable_id, :likeable_type
end
