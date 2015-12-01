json.id check_in.id
json.user check_in.user
json.userImage asset_path(check_in.user.image.url(:thumb))
json.beer check_in.beer
json.beerImage asset_path(check_in.beer.image.url(:thumb))
json.brewery check_in.beer.brewery
json.venue check_in.venue
json.rating check_in.rating
json.review check_in.review
json.likes check_in.likes
@like_images = check_in.likes.order(created_at: :desc).includes(:liker).limit(5).map do |like|
  asset_path(like.liker.image.url(:small))
end

json.likeImages @like_images

json.image asset_path(check_in.image.url(:home_page)) if check_in.image.presence
if Time.now - check_in.created_at < 1.day
  json.created_at (time_ago_in_words(check_in.created_at) + " ago")
else
  json.created_at check_in.created_at.strftime("%m/%d/%Y")
end


json.comments do
  json.array! check_in.comments.order(created_at: :asc) do |comment|
    json.partial! 'api/comments/comments', comment: comment
  end
end
