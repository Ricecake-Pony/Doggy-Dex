class User < ApplicationRecord


    # This activates Bcrypt for our :password_digest
    has_secure_password
    
end
