json.id @comment.check_in.id
json.user @comment.check_in.user
json.beer @comment.check_in.beer
json.rating @comment.check_in.rating
json.review @comment.check_in.review

json.comments do
  json.partial! 'api/comments/comments', comments: @comment.check_in.comments
end
