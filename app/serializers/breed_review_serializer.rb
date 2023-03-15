class BreedReviewSerializer < ActiveModel::Serializer
  attributes :id, :note, :date
  has_one :user
  has_one :breed
end
