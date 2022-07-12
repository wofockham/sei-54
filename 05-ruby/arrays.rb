require 'pry'

# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday

days_of_the_week = %w( Monday Tuesday Wednesday Thursday Friday Saturday Sunday )
p days_of_the_week # p: displays output for programmers (programmers' print AKA pretty print)

# ### 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.

# v1 long winded and explicit
# day_to_move = days_of_the_week.pop
# days_of_the_week.unshift day_to_move

# v2 Very clever:
# days_of_the_week.unshift days_of_the_week.pop
# p days_of_the_week

# v3 Most Rubyish
days_of_the_week.rotate! -1
p days_of_the_week

# ### 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
week_parts = [ days_of_the_week[1..5] , days_of_the_week.rotate.drop(5) ]
p week_parts

# ### 4. Remove either the weekdays or the weekends
# Your choice...
week_parts.pop
p week_parts

# ### 5. Sort the remaining days alphabetically
p week_parts.flatten.sort
