require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: next week, Rails will do this for you automatically.
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: a class that is backed by a database
class Butterfly < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# Show all the butterflies
get '/butterflies' do
    @butterflies = Butterfly.all
    erb :butterflies_index
end

# NEW
# Blank form for a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
# Insert the user's form data into the database
post '/butterflies' do
    butterfly = Butterfly.new
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save
    redirect to("/butterflies/#{ butterfly.id }") # GET request to SHOW
end

# SHOW
# Show a single butterfly
get '/butterflies/:id' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_show
end

# EDIT
# Pre-filled form for updating a butterfly
get '/butterflies/:id/edit' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_edit
end

# UPDATE
# Update a butterfly with the user's form data
post '/butterflies/:id' do
    butterfly = Butterfly.find params[:id]
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save
    redirect to("/butterflies/#{ params[:id] }") # GET request
end

# DESTROY
# Delete a butterfly from the database
get '/butterflies/:id/delete' do
    butterfly = Butterfly.find params[:id]
    butterfly.destroy
    redirect to('/butterflies')
end

# TODO: add a connection close.