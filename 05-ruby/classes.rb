require 'pry'

# An object is like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash, an object can have custom methods (functions inside the object).

class Actor
    def award_speech
        "I would like to thank my agents and my partner. We did it baby!"
    end

    def deny_allegations
        "I deny that and I don't remember and I was drunk and he's not my type" # Kevin Spacey defense
    end
end

class Stooge < Actor
    def terrible?
        true
    end
end

class MarxBrother < Actor
    # Macro to write getters and setters for you
    attr_accessor :name, :instrument, :vice

    def initialize(n='', i='voice', v='lampooning authority') # variadic 0..3
        @name = n
        @instrument = i
        @vice = v
    end

    # Custom method
    def play
        "My name is #{ @name } and I play the #{ @instrument }"
    end
end

groucho = MarxBrother.new
groucho.name = 'Groucho'
groucho.instrument = 'guitar'
groucho.vice = 'cigars'

harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

binding.pry