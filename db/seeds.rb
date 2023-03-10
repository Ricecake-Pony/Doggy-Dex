puts "Starting Seeding..."

puts "Clearing Database..."
User.destroy_all
puts " Database Cleared!"

puts "Creating Users..."
User.create( username: "Trey", password: "1")
User.create( username: "Kevin", password: "1")
puts "Users Created!"

puts "Seeding Completed!"

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
