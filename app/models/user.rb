class User < ApplicationRecord
    has_many :breed_reviews
    has_many :breeds, through: :breed_reviews

    has_many :dog_product_reviews
    has_many :dog_products, through: :dog_product_reviews

    

    # This activates Bcrypt for our :password_digest
    has_secure_password
    
end
