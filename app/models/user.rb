class User < ApplicationRecord
    has_many :breed_reviews, dependent: :destroy
    has_many :breeds, through: :breed_reviews

    has_many :dog_product_reviews, dependent: :destroy
    has_many :dog_products, through: :dog_product_reviews

    def reviewed_breeds
        breed_reviews.map{ |review| review}
    end

    def reviewed_products
        dog_products.map{ |review| review.dog_product}
    end
   
    # This activates Bcrypt for our :password_digest
    has_secure_password
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP}

    PASSWORD_REQUIREMENTS = /\A
        (?=.{8,}) # must be at least 8 characters long
        (?=.*\d)  # must contain one number at least
        (?=.*[a-z]) # must contain at least one lower case letter
        (?=.*[A-Z]) # must contain at least one upper case letter
        (?=.*[[:^alnum:]]) # must contain at least one symbol
    /x

    validates :password, presence: true, format: PASSWORD_REQUIREMENTS
end
