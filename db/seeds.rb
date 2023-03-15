require 'rest-client'
require 'json'

puts "Starting Seeding..."

puts "Clearing Database..."
User.destroy_all
Breed.destroy_all
puts " Database Cleared!"

puts "Creating Users..."
User.create( username: "Trey", password: "1")
User.create( username: "Kevin", password: "1")
puts "Users Created!"
# 220 dog pop
puts "Creating Breeds"

        url = "https://api.thedogapi.com/v1/breeds"
        response = RestClient.get(url)
        parsed_list = JSON.parse(response)
        # debugger
        parsed_list.map do |dog| Breed.create(name: dog["name"],
        bred_for: dog["bred_for"],
        breed_group: dog["breed_group"], 
        lifespan: dog["life_span"], 
        weight_imperial: "#{dog["weight"]["imperial"]} ",
        weight_metric: dog["weight"]["metric"], 
        height_imperial: dog["height"]["imperial"] ,
        height_metric: dog["height"]["metric"],
        temperament: dog["temperament"], 
        image_url: dog["image"]["url"])
        end

puts "Breeds Completed"

puts "Seeding Completed!"

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

