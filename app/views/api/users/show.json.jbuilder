json.user do
  json.extract! @user, :id, :username, :location, :website, :about
  json.image_url asset_path(@user.image.url(:title))
  json.joined @user.created_at.strftime("%m/%d/%Y")
  json.count @user.check_ins.count
  json.uniqueCount @user.check_ins.select(:beer_id).distinct.count(:beer_id)
  json.status friendship_status(@user)

  friend_images = @user.friends.limit(16).includes(:user).map do |friend|
    asset_path(friend.user.image.url)
  end

  json.friends friend_images

  liked_items = @user.likes.where("likeable_type != 'CheckIn'").includes(:likeable).map do |like|
    asset_path(like.likeable.image.url)
  end

  json.likes liked_items
end

json.check_ins do
  json.array! @check_ins do |check_in|
    json.partial! 'api/check_ins/check_ins', check_in: check_in
  end
end
