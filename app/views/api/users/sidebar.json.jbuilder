json.extract! @user, :username, :email, :location
json.count @user.check_ins.count
json.uniqueCount @user.check_ins.select(:beer_id).distinct.count(:beer_id)

json.image_url asset_path(@user.image.url(:thumb))
json.approvals @user.approvals.includes(:requester).map(&:requester)
