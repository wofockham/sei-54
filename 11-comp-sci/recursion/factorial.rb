# 5! = 5 * 4 * 3 * 2 # iterative
# 5! = 5 * 4!

# Divide and conquer

require 'pry'

def factorial_iterative(n) # initial
    result = 1
    while n > 0            # conditional
        result *= n
        n -= 1             # mutation
    end
    result
end

def factorial_recursive(n) # intial
    if n <= 1              # base case
        1
    else
        n * factorial_recursive(n - 1) # no mutation
    end
end

binding.pry