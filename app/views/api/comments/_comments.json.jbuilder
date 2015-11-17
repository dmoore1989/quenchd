json.array! comments do |comment|
  comment.user comment.commenter
  comment.body comment.body
end
