# Schema Information

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
image       |           | use paper clip gem/AWS S3

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
brewer_id   | integer   | foreign key (references users), indexed
location    | string    |
image       |           | use paper clip gem/AWS S3

## venues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
owner_id    | integer   | foreign key (references users), indexed
address     | string    | not null
image       |           | use paper clip gem/AWS S3

## likes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
liker_id      | integer   | not null, foreign key(references users)
likeable_id   | integer   | not null, polymorphic key (for checkins, beers, breweries, and venues), indexed
likeable_type | string    | not null, polymorphic type


## checkins
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
beer_id       | integer   | not null, foreign key (references beers), indexed
venue_id      | integer   | foreign key (references venues), index
rating        | float     | not null, between 0 and 5
review        | string    | less than: 140 chars
image         |           | use paper clip gem/AWS S3

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
checkin_id    | integer   | not null, foreign key (references checkins), indexed
commenter_id  | integer   | not null, foreign key (references users), indexed
body          | string    | not null, less than: 140 chars

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
DOB             | datetime  | not null
location        | string    |
website         | string    |
about           | string    |    
image           |           | use paper clip gem/AWS S3

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key(references users), indexed
friend_id   | string    | not null, foreign key(references users), indexed

## friend_requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key(references users), indexed
approver_id | string    | not null, foreign key(references users), indexed
