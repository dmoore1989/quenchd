json.id check_in.id
json.user check_in.user
json.beer check_in.beer
json.rating check_in.rating
json.review check_in.review

json.comments do
  json.partial! 'api/comments/comments', comments: check_in.comments
end
