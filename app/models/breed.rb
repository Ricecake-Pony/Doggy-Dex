class Breed < ApplicationRecord
    has_many :breed_reviews
    has_many :users, through: :breed_reviews

end
