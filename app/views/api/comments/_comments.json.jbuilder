json.id comment.id
json.user comment.commenter
json.userImage asset_path(comment.commenter.image.url(:small))
json.body comment.body
json.created time_ago_in_words(comment.created_at)
