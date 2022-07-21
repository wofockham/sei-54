class User < ApplicationRecord
    has_secure_password
    has_many :mixtapes
end
