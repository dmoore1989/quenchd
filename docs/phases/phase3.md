# Phase 3: Breweries, Venues, and Likes

## Rails
### Models
* Brewers
* Venues
* Likes

### Controllers
* Api::BreweriesController (create, destroy, search, show, update)
* Api::VenuesController (create, destroy, search, show, update)
* Api::LikesController (create, destroy) (Will be fetched with relevent item
using jbuilder)

### Views
* breweries/show.json.jbuilder
* venues/show.json.jbuilder
* breweries/new.html.erb
* venues/new.html.erb
* breweries/edit.html.erb
* venues/edit.html.erb
* form.html.erb (partial to be shared between breweries and venues)

## Flux
### Views (React Components)
* ShowPageIndex
  -CheckInIndexItem
* DetailSnapShot
* LikeButton

### Stores
* Brewers
* Venues

### Actions
* ApiActions.receiveSingleVenue
* ApiActions.receiveSingleBrewer
* ApiAction.CreateLike

### ApiUtil
* ApiUtil.fetchBrewer
* ApiUtil.fetchVenue

## Gems/Libraries
