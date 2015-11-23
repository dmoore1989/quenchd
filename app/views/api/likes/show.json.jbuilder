json.set! @like.likeable_type do
  json.liker @like.liker;
  json.likeable_id @like.likeable_id
end
