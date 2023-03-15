class User < ApplicationRecord
    has_many :breeds
    has_many :breed_reviews, through: :breeds

    # This activates Bcrypt for our :password_digest
    has_secure_password
    
end
