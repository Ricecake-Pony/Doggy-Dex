class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :image_url
end
