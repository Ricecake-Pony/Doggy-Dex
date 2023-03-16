class DogProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :toy, :price, :image_url
end
