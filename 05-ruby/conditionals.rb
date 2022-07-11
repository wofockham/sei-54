# Ruby has a rich variety of expressions for asking questions (conditionals)

n = 1001

if n > 5
    puts "n is greater than 5"
    puts "wow"
else
    puts "n is not greater than 5"
end

# Multiple possibilities: elsif

grade = 'F'

if grade == 'A'
    puts "You are killing it"
elsif grade == 'B'
    puts "You are coasting fine"
elsif grade == 'C'
    puts "Adequate"
else # default
    puts "Please see Loden after class"
end

# TODO: research Ruby's case statement

# Ruby's bonus conditionals #########################################

# Short AKA modifier AKA backwards if

puts "n is greater than 5" if n > 5

# unless is the opposite of if
today_is_wednesday = false

# if today_is_wednesday != true
#     puts "Today is not Wednesday"
# end

unless today_is_wednesday
    puts "Today is not Wednesday"
end

# unless also supports the modifier (AKA backwards) form
puts "Today is not Wednesday" unless today_is_wednesday