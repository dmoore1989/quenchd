# Phase 1: User Authentication, Beer Model and JSON API

## Rails
### Models
* User
* Beer
* CheckIns

### Controllers
* UsersController (create, new, edit, destroy, update, show)
* SessionsController (create, new, destroy)
* Api::BeersController (create, destroy, search, index, show, update)
* Api::CheckInsController (create, destroy, index, show, update)
* Api::CommentsController (create, destroy) (will be fetched with checkins
  using jbuilder)

### Views
* users/new.html.erb
* session/new.html.erb
* beers/show.json.jbuilder
* checkins/index.json.jbuilder
* checkins/show.json.jbuilder


## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt
