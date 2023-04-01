class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :image_url
  has_many :breed_reviews
  has_many :dog_product_reviews
end
