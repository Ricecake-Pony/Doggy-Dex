class Breed < ApplicationRecord
    has_many :users
    has_many :breed_reviews, through: :users

end
