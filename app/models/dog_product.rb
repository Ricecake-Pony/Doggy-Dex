class DogProduct < ApplicationRecord
    has_many :dog_product_reviews
    has_many :users, through: :dog_product_reviews
end
