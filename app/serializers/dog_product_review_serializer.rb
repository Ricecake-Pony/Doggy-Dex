class DogProductReviewSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user
  has_one :dog_product
end
