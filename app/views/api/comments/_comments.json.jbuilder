json.array! comments do |comment|
  json.user comment.commenter
  json.body comment.body
  json.created time_ago_in_words(comment.created_at)
end
