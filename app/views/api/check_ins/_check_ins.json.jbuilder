json.id check_in.id
json.user check_in.user
json.beer check_in.beer
json.brewery check_in.beer.brewery
json.venue check_in.venue
json.rating check_in.rating
json.review check_in.review
if Time.now - check_in.created_at < 1.day
  json.created_at (time_ago_in_words(check_in.created_at) + " ago")
else
  json.created_at check_in.created_at.strftime("%m/%d/%Y")
end

json.comments do
  json.partial! 'api/comments/comments', comments: check_in.comments.order(created_at: :asc)
end
