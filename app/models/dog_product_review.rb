class DogProductReview < ApplicationRecord
  belongs_to :user
  belongs_to :dog_product
end
