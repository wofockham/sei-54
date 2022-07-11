# while true
#     puts "wow"
# end

# Control-c cancels a running Ruby program

# while
# initialize, conditional, update
i = 0   # initial
while i < 10 # conditional
    puts "i is now #{ i }"
    i += 1 # no ++ # update
end

# if    => unless
# while => until
j = 0
until j == 10
    puts "j is now #{ j }"
    j += 1
end

# Iterators: Ruby's preferred method of iterating/looping
# No mess, no fuss

7.times do
    puts "goldfish"
end

3.times { puts "hamster" } # Alternate syntax for a single statement

7.times do |n|
    puts "n is currently #{ n }"
end

# There are dozens of iterators. For example, to count backwards:
7.downto(0) do |num|
    puts "num is currently #{ num }"
end