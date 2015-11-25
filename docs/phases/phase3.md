# Phase 3: Breweries, Venues, and Likes

## Rails
### Models
* Brewersx
* Venuesx
* Likesx

### Controllers
* Api::BreweriesController (create, destroy, search, show, update)x
* Api::VenuesController (create, destroy, search, show, update)x
* Api::LikesController (create, destroy) x

### Views
* breweries/show.json.jbuilder x
* venues/show.json.jbuilder x
* breweries/new.html.erb
* venues/new.html.erb
* breweries/edit.html.erb
* venues/edit.html.erb


## Flux
### Views (React Components)
* ShowPageIndex x
  -CheckInIndexItem x
* DetailSnapShot x
* LikeButton x

### Stores

### Actions
* ApiActions.receiveVenue x
* ApiActions.receiveBrewer x
* ApiAction.CreateLike x

### ApiUtil
* ApiUtil.fetchBrewer x
* ApiUtil.fetchVenue x
* ApiUtil.CreateLike x

## Gems/Libraries
