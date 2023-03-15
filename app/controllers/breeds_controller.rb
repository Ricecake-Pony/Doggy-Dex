class BreedsController < ApplicationController

    def create 
        breed= Breed.create(name: "Yorkshire Terrier", bred_for: "Small vermin hunting", breed_group: "Toy", lifespan: "12 -16 years", temperament: "Bold, Independent, Confident, Intelligent, Courageous", weight_imperial:"4 - 7", weight_metric: "2 - 3", height_imperial: " 8 - 9", height_metric: "20 -23", image_url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg")
    end

end
