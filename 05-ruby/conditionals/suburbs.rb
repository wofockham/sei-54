# ### 3. Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In what suburb do you reside: "
residence = gets.chomp.capitalize

# v2 case
puts case residence
when 'Bondi'
    "Wow beaches and botox etc"
when 'Glebe'
    "Nice foreshore walk"
when 'Newcastle'
    "That is quite the commute"
else
    "I'm sure that's a nice place"
end

# v1
# if residence == 'Bondi'
#     puts "Wow beaches and botox etc"
# elsif residence == 'Glebe'
#     puts "Nice foreshore walk"
# elsif residence == 'Newcastle'
#     puts "That is quite the commute"
# else
#     puts "I'm sure that's a nice place"
# end