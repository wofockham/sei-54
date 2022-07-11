# greeter.rb - a program that greets you

# Demonstrates input and output

puts "Welcome to the greeter program" # console.log: puts includes a new line at the end.

print "What is your name: " # print does not include a trailing new line.
name = gets.chomp # gets: get a string from the keyboard, chomp: returns the string without \n

puts "Hello #{ name }!"

print "What is your surname: "
surname = gets.chomp 

puts "Your full name is #{ name } #{ surname }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
