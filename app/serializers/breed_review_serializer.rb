class BreedReviewSerializer < ActiveModel::Serializer
  attributes :id, :note, :user

  belongs_to :user
  has_one :breed

end
