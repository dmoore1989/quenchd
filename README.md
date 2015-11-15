# Quenchd

[Heroku link]Coming soon!!!

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Quenchd is a web application inspired by Untappd built using Ruby on Rails and React.js.  Quenchd allows users to:


<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] "Check into," rate, and review beers they have drank noting venue.
- [ ] Add beers to app.
- [ ] Friend fellow users and comment on their checkins.
- [ ] View beers they and other users have drank in the past.
- [ ] View brewery and bar pages that contain check ins.
- [ ] Like checkins, breweries, beers, and venues.



## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Beer Model, Checkin/Comment Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Beers, CheckIns, and
Comments.

[Details][phase-one]

### Phase 2: Flux Architecture and Checkin/Comment CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Beer store will be implemented and a set of actions corresponding to
the need CRUD functionality created.  Once this is done, I will create react
views for the Index, `Index`, `IndexItem` and `CheckInForm`.  At the end of
phase 2, CheckIns can be created, read, edited, and destroyed and comments added and destroyed to these in the browser. Finally, while constructing these views, I will start my styling using CSS.

[Details][phase-two]

### Phase 3: Breweries, Venues, and Likes (1.5 days)

Phase 3 adds organization to the Beers. Beers belong to a Brewer and Check Ins
belong to a Venue. Create JSON API for Brewers and Venues. For creating, and
updating breweries and venues, I will make these items via the standard rails
HTTP request as only owner and brewers can make these changes.   All of these
items in addition to checkins can be liked.

[Details][phase-three]

### Phase 4: Search functionality (1 day)

Phase 4 will implement my sites search functionality.  Users can search for Beers, Breweries, and Venues by toggling between the three.  There will be a react component search bar which will organize all three on the header bar.

[Details][phase-four]

### Phase 5: Friends and Images (1.5 days)

Phase 5 introduces two new features. First, can add friends to their profiles.
These friends must be approved and once that occurs they will be able to see
each others check ins.  I will add a friends page to search for  In addition, I
will add image functionality to my users and checkins so users can share photos
of their drinks.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Phase 6 will be a day of general CSS styling clean up and preparing my seed data.  I will be using BreweryDB api to retrieve a large list of brewers, and beers, the NYS SLA license api to retrieve venues (on premise bars), and will be seeding my own users list.

### Bonus Features (TBD)
- [ ] Check In Badges
- [ ] Notification (Not a current feature of the Untappd app (mobile push notifications only) but should be)
- [ ] Display trending
- [ ] Similar Beers
- [ ] Multiple Sign In Auth/Cookie

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
