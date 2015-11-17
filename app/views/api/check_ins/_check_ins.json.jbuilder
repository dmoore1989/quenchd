json.array! check_ins do |check_in|
  json.user check_in.user
  json.beer check_in.beer
  json.venue check_in.venue
  json.rating check_in.rating
  json.review check_in.review

  json.partial! 'comments/comments', comments: check_in.comments

end
