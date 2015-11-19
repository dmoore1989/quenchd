check_ins.each do |check_in|
  json.set! check_in.id do
    json.set! :user, check_in.user
    json.set! :beer, check_in.beer
    json.set! :review, check_in.review
    json.set! :rating, check_in.rating
    json.set! :comments, check_in.comments
  end
end
