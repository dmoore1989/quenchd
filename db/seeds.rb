# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


catfish = Brewery.create(
  name: "Catfish Tail Brewing Company",
  location: "Newark, NJ",
  image: "http://fishandgame.idaho.gov/ifwis/fishingplanner/images/FishID/channel_catfish.jpg"
)

sierra = Brewery.create(
  name: "Sierra Colorado",
  location: "Portland, OR",
  image: "http://www.morningkids.net/name/images/coloring-page-first-name-sierra.jpg"
)

monks = Brewery.create(
  name: "Monniken bij Bier Trappist Brouwerij",
  location: "Antwerp, Belgium",
  image: "http://www.stpeterslist.com/wp-content/uploads/2011/08/trapppist.png"
)

belgium = Brewery.create(
  name: "Old Belgium Brewing Company",
  location: "Breckenridge, CO",
  image: "http://crushbrew.com/wp-content/uploads/2015/05/New-Belgium2.jpg"
)

john = Brewery.create(
  name: "John Adams Brewing Company",
  location: "Worcester, MA",
  image: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxMjc3MzIxNzQx.jpg"
)

catfish.beers.create(name: "IPA", style: "IPA", abv: 6.5 , ibu: 86, image: "http://assets-s3.mensjournal.com/img/essential/20-things-you-didnt-know-about-hops/618_348_20-things-you-didnt-know-about-hops.jpg")
catfish.beers.create(name: "Red Ale", style: "Amber", abv: 5.0 , ibu: 43, image: "http://www.homebrewstuff.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amber_1_4.jpg")
catfish.beers.create(name: "Barleywine", style: "Barleywine", abv: 13.5 , ibu: 52, image: "http://www.foodnavigator-usa.com/var/plain_site/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/markets/barley-always-a-bridesmaid-never-a-bride-getting-this-super-grain-into-the-spotlight/8570588-4-eng-GB/Barley-always-a-bridesmaid-never-a-bride-getting-this-super-grain-into-the-spotlight_strict_xxl.jpg")

sierra.beers.create(name: "Mess Your Mouth Up IPA", style: "Double IPA", abv: 8.8 , ibu: 154, image: "https://www.hopgear.com/img/hop-head.png")
sierra.beers.create(name: "Don't Mess Up Your Mouth Blonde Ale", style: "Blonde Ale", abv: 4.5 , ibu: 20, image: "http://www.shopbrewmeister.com/media/catalog/product/cache/1/image/265x265/17f82f742ffe127f42dca9de82fb58b1/l/a/lager-good_1_1.jpg")
sierra.beers.create(name: "Seasonal Creep Spring Lager", style: "Spring Lager", abv: 5.5 , ibu: 45, image: "http://www.therubi.com/wp-content/uploads/2015/07/Pale-Lager.jpg")

monks.beers.create(name: "Monniken 6", style: "Dubble", abv: 7.2 , ibu: 45, image: "http://images.newsflow24.com/340/340490/19-hilarious-photos-of-monks-looking-at-alcoholic-beverages_14.jpg")
monks.beers.create(name: "Monniken 8", style: "Triple", abv: 8.4 , ibu: 50, image: "http://cdn1.bostonmagazine.com/wp-content/uploads/2014/08/trappist-1.jpg")
monks.beers.create(name: "Monniken 10", style: "Quad", abv: 8.9 , ibu: 55, image: "http://cdn.psfk.com/wp-content/uploads/2012/06/ampleforth-abbey-monk-beer.jpg")

belgium.beers.create(name: "Flat Tire", style: "Belgian Amber", abv: 6.5 , ibu: 55, image: "http://images.thecarconnection.com/med/flat-tire-by-flickr-user-tiger-girl_100398893_m.jpg")
belgium.beers.create(name: "Cranberry Pumpkin Spice White Lambic Ale", style: "Wild Ale", abv: 7.2 , ibu: 15, image: "http://3.bp.blogspot.com/-8CoE2F0L7Gg/VKf_4jhle1I/AAAAAAAAGiA/ET7YGAd0jFI/s1600/lambic2.jpg")
belgium.beers.create(name: "Ohh my Gueuze!!!", style: "Gueze", abv: 6.5 , ibu: 55, image: "http://cdn.psfk.com/wp-content/uploads/2012/06/ampleforth-abbey-monk-beer.jpg")
belgium.beers.create(name: "Audacity of Hops", style: "Belgian IPA", abv: 7.8, ibu: 78, image: "https://beeractivist.files.wordpress.com/2008/10/audacity-of-hops.jpg?w=450&h=590")

john.beers.create(name: "Worcester Lager", style: "German Lager", abv: 5.5 , ibu: 55, image: "http://ransfordpc.com/pestcontrolblog/wordpress/wp-content/uploads/2014/03/map_of_worcester_ma.jpg")
john.beers.create(name: "Really Bad Tasting Cherry Beer", style: "Fruit Ale", abv: 5.0 , ibu: 15, image: "http://3.bp.blogspot.com/-8CoE2F0L7Gg/VKf_4jhle1I/AAAAAAAAGiA/ET7YGAd0jFI/s1600/lambic2.jpg")
john.beers.create(name: "Ohh my Gourd!!! Pumpkin Ale", style: "Gueze", abv: 6.5 , ibu: 45, image: "http://drinks.seriouseats.com/images/2011/09/20110930_173049_Homebrew_Pumpkin.jpg")
john.beers.create(name: "Octoberfest", style: "Marzen", abv: 6.8, ibu: 57, image: "http://40.media.tumblr.com/37eea6a15d2779dbfef73f666ded14fb/tumblr_mueoanGAvH1siovoto1_500.jpg")

User.create(username: "DougMoore", email: "doug@email.com", password: "hello1", location: "NYC", image: "http://www.douglasmoore.me/assets/douglas-moore-079fb856e207c7332a5244c1f28a5a6fb0d0b453e0dfeedb329879212c6de367.jpg")
User.create(username: "DUFFMAN", email: "duffman@ohyeah.com", password: "hello1", location: "NYC", image: "http://vignette2.wikia.nocookie.net/simpsons/images/c/ce/Duff_man.png/revision/latest?cb=20130808075436")
User.create(username: "Hank Hill", email: "hank@stricklandpropene.com", password: "hello1", location: "Arlen", image: "http://vignette2.wikia.nocookie.net/legendsofthemultiuniverse/images/7/7c/08-King-of-Hill-Hank_l.jpg/revision/latest?cb=20140902033620")
User.create(username: "Red Ranger", email: "doug@email.com", password: "hello1", location: "NYC", image: "http://pre05.deviantart.net/0662/th/pre/i/2013/289/0/3/red_ranger_by_thuddleston-d6qq8jy.jpg")
User.create(username: "guest", email: "guest@guest.com", password: "hello1", location: "NYC")
