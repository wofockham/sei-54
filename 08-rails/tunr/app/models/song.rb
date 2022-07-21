class Song < ApplicationRecord
    belongs_to :artist, :optional => true
    belongs_to :album, :optional => true
    has_and_belongs_to_many :mixtapes
    has_and_belongs_to_many :genres
end
