# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(
username: "doug",
password: "hello1",
email: "doug@email.io",
location: "New York, NY",
dob: "1989-02-01"
)

9.times do |x|
  User.create(
    username: Faker::Name.name,
    password: "testing",
    email: Faker::Internet.email,
    location: Faker::Address.country,
    dob: Faker::Date.backward(28))
end


5.times do |x|
  Beer.create(
    name: Faker::Commerce.product_name,
    style: "Imperial Lambic Dark Pumpkin IPA",
    brewery_id: 1
  )
end

20.times do |x|
  CheckIn.create(
    user_id: (x % 10 + 1),
    beer_id: (x % 5 + 1),
    rating: 4,
    review: Faker::Lorem.sentence(5)
  )
end

Venue.create(
  name: "A cool bar",
  address: "123 Fake St. Brooklyn, NY 11215"
)

CheckIn.all[0..4].each do |check_in|
  check_in.venue_id = 1
  check_in.save
end

40.times do |x|
  Comment.create(
    check_in_id: (x % 20 + 1),
    commenter_id: (x % 10 + 1),
    body: Faker::Lorem.sentence(5)
  )
end

Brewery.create(
  name: "Catfish Tail Brewing Company",
  brewer_id: 1,
  location: "Newark, NJ"
)
