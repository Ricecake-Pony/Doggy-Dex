class BreedReviewSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user
  has_one :breed
end
