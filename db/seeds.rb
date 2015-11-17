# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do |x|
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
    brewery_id: x
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

40.times do |x|
  Comment.create(
    checkin_id: (x % 20 + 1),
    commenter_id: (x % 10 + 1),
    body: Faker::Lorem.sentence(5)
  )
end
