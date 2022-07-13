require 'sinatra'
require 'sinatra/reloader'

# Routes AKA path AKA action
get '/' do
    "Hello world from the home page"
end

get '/hello' do
    "Hello world from Sinatra"
end

get '/goodbye' do
    "Goodbye cruel world."
end

# Dynamic content
get '/lucky-number' do
    "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
    "Here is the uptime: #{ `uptime` }"
end

# Dynamic URLs

# Marx Brothers Fan Club
# Pay me $500 and I will make you a web page.

# Infinite number of URLs
get '/fanclub/:name' do
    "#{ params[:name].capitalize } is a proud member of the Marx Brothers Fan Club"
end

# $700 silver membership: /fanclub/peter/sellers
get '/fanclub/:first/:last' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a silver member of the Marx Brothers Fan Club"
end

# $1000 gold membership: /fanclub/pope/boniface/harpo
get '/fanclub/:first/:last/:favorite' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a gold member of the Marx Brothers Fan Club and their favorite brother is #{ params[:favorite] }"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
    result = params[:x].to_f * params[:y].to_f # Servers treat everything as strings by default.
    "The result is #{ result }"
end

# TWO SERIOUS COMPLAINTS
# If this is a web server, where the hell is the HTML?
# How do we get user input without making the poor slobs edit the URL by hand?