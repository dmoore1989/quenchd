# Phase 2: Flux Architecture and CheckIn/Comment CRUD
## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* CheckInIndex
  - CheckInIndexItem
* ShowMoreCheckins
* CheckInForms
  - WordCount
* CommentForm
* CreateBeerForm
* ToggleActivity

### Stores
* Beer
* Comment

### Actions
* ApiActions.receiveAllCheckins
* ApiActions.receiveSingleCheckin
* ApiActions.deleteCheckIn

### ApiUtil
* ApiUtil.fetchAllCheckins
* ApiUtil.fetchSingleCheckin
* ApiUtil.createCheckIn
* ApiUtil.editCheckIn
* ApiUtil.destroyCheckIn
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
* Flux Dispatcher
