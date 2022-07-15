require 'pry'

# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash, an object can have custom methods (functions inside the object).

# class Butterfly < ActiveRecord::Base
# end

class MarxBrother
    # Macro to write getters and setters for you
    attr_accessor :name, :instrument, :vice
end

groucho = MarxBrother.new

binding.pry