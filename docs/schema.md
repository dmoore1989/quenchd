# Schema Information

NB: Beers, Breweries, Venues, Users, Checkins will accept images but I'm not 100% sure how to implement this in my schema.  This will be a question I will be asking on Monday

## beers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
abv         | integer   |
ibu         | integer   |
style       | string    | not null
description | text      |
brewery_id  | integer   | not null, foreign key (references breweries), indexed

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, foreign key (references users), indexed
location    | string    | not null

## venues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
address     | string    | not null

## likes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
likeable_id   | integer   | not null, polymorphic key, indexed
likeable_type | string    | not null, polymorphic type

## checkins
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
beer_id       | integer   | not null, foreign key (references beers), indexed
venue_id      | integer   | foreign key (references venues), index
rating        | float     | not null, between 0 and 5
review        | string    | not null, less than: 140 chars

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
checkin_id    | integer   | not null, foreign key (references checkins), indexed
comment       | string    | not null, less than: 140 chars

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |
website         | string    |
about           | string    |    

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friend_id   | string    | not null, foreign key(references users), indexed
