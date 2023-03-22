class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :first_name, :image_url
end
