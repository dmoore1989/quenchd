json.array! comments do |comment|
  json.user comment.commenter
  json.body comment.body
  json.created comment.created_at
end
