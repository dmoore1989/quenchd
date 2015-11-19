# Phase 5: Friends and Images

## Rails
### Models
* Friend
* Image

### Controllers
* Api::FriendsController (create, destroy, update)
* Api::ImageController (create, destroy)

### Views

## Flux
### Views (React Components)
  * PendingFriendRequestIndex
  * PendingFriendRequestItem
  * FriendIndex
  * FriendSearchBar
  * RenderImages
  * ToggleActivity

### Stores
  * Friend
  * Image

### Actions
  * ApiActions.receiveAllFriends
  * ApiActions.createFriend
  * ApiActions.updateFriendRequest
  * ApiActions.receiveAllImages
  * ApiActions.createImages
  * ApiActions.destroyImages

### ApiUtil
  * ApiUtil.fetchAllFriends
  * ApiUtil.fetchImages

## Gems/Libraries
