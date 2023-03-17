require 'rest-client'
require 'json'

puts "Starting Seeding..."

puts "Clearing Database..."
User.destroy_all
Breed.destroy_all
BreedReview.destroy_all
DogProduct.destroy_all
DogProductReview.destroy_all
puts " Database Cleared!"

puts "Creating Users..."
trey = User.create( username: "Trey", password: "1")
kevin = User.create( username: "Kevin", password: "1")
puts "Users Created!"
# 172 dog pop boxer=45
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

puts "Creating Breed Reviews"
        BreedReview.create(note: "I really  dont like small dogs!!", user_id: rand(1..2), breed_id: rand(1..10)  )
        BreedReview.create(note: "They're such clowns!", user: trey, breed_id: 45)
puts "Breed Reviews Complete"

puts "Creating Dog Products"
        DogProduct.create(title: "QDAN Dog Toys Soccer Ball, Durable Dog Balls for Small & Medium Dogs-Blue&Red(6 inch)",   description: "Durable & Soft: Complying with the exact same standard as children's toys, the dog ball is made of premium PU that is the matiral of standard soccer ball so that it can be kicked and bounces as well. Note, our dog soccer medium balls is suitable for 20-40lbs dogs, HEAVY DOG PET needs to choose our Large one(Large size, fits 30-90lbs).
        Upgrade Interactive Dog Toy: Dog soccer ball with nylon tabs sewn evenly into the seams not only create an erratic bounce that dogs love to chase, but also make it easier for the dogs to fetch, toss, tug and retrieve. Dog paws are printed evenly on the dog toys ball to attract dogs attention. There's a longer strap for people to hold onto the ball, making it a great interactive dog toy to train your dogs.
        Ultra Bouncing Ball for Water Play: Adopted the lightweight, buoyant design, QDAN soccer ball for dogs can be played in the pool, lake and beach as well. The straps dog soccer ball is meant to keep your dog entertained, active and help human beings and dogs stay engaged.
        PUMP & Needle Adapter Included: The hearding balls for dogs comes deflated. There's a a needle point adapter and a pump inside as well while other items in the same market only include a ball needle. The soccer ball dog toy is 6 inches in diameter, perfect for small & medium breeds, not for aggressive chewers.
        EASY HANDLING :The design of rope on surface is easier for dogs to pick up and fetch,, while the hexagon texture on the outside and the long rope at the top makes it easy for humans to grip and toss.
        ATTENTION: This is limited to interactive dog not chew toys", price: 18.64, toy: true,  image_url:"https://m.media-amazon.com/images/I/7116GRi5D4L._AC_SL1500_.jpg")
        
        DogProduct.create(title: "JW Hol-ee Roller Dog Fetch Treat Dispenser Puzzle Ball; Medium 4.5 Inch Diameter", description: "Dog Chew Toy: JW Dog Toys are made from patented rubber that stands up to tough use and offers multiple ways to play. Tug it, fetch it, chew it, or stuff it with treats for ultimate fun with the JW roller ball!
        Entertaining and Enriching: This enriching JW ball chew toy helps keep your dog entertained and provides essential mental stimulation; Natural rubber is gentle on your dog's gums as they chew and teethe.
        JW Dog Toy Collection: Designed especially for dogs, our full line of versatile and durable chew, tug, and fetch toys were made to meet the unique developmental needs of your dog.
        Intelligent Designs, Happy Pets: JW pet products are designed to improve the lives of pets and owners. Try our full line of dog treat dispensers, squeaker toys, brushes, interactive cat toys and more.
        Just For Pets: Petmate makes a variety of pet products for dogs, cats, chickens, and other furry friends; Check out our brands such as Aspen Pet, Arm & Hammer, Booda, Chuckit and more.", price: 11.99, toy: true, image_url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBoh8NyXa5NGdh_FWLGHX27Q0RsCmriDyNeZ0jUgQU5aIV8_qC")
        
        DogProduct.create(title:"PAWISE Dog Training Exercise Equipment,Dog Agility Training Equipment", description:"PACKAGE-The agility training equipment for dogs includes 2pcs weaving poles(length 45.3in) with steel spike(length 6.1in) for inserting into the ground,1 jump hurdle (length 43in)and 2 adjustable clips.
        HIGH QUALITY-The outdoor dog toys are made of ABS material, safe and non-toxic, Lightweight, durable that can be used for park, backyard.
        EASY TO SETUP AND STORE-Setting up this dog agility for your dog is quick and easy! The outdoor play equipment comes with a carrying bags that make it easy to carry and store.
        ADJUSTABLE HEIGHT-The dog obstacle course is supplied with 2 rotational, adjustable clips which can change the equipment height easily and flexibly.The dog agility equipment is suitable for most dogs.
        GREAT GIFT FOR DOGS-The dog agility course is perfect outdoor game.It not just a speed training equipment but also Ideal to train your pet's flexibility and endurance.You will have nice time with this dog training tools.", toy: false, price: 29.99, image_url:"https://m.media-amazon.com/images/I/81aKzJ8MUFL._AC_SL1200_.jpg" )
puts "Dog Products Loaded"

puts "Creating Dog Product Reviews"
        DogProductReview.create(note: "My doggie loves it!", user: kevin, dog_product_id: 1)
        DogProductReview.create(note: "My doggie hates it", user_id: rand(1..2), dog_product_id: 2)
        DogProductReview.create(note: "My dog never stops playing with it", user: trey, dog_product_id: 2)
puts "Dog Product Reviews in the Webs!"

puts "Seeding Completed!"

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

