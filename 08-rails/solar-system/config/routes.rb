Rails.application.routes.draw do
  # This file will cause the most suffering today
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => :new_planet
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => :planet
  get '/planets/:id/edit' => 'planets#edit', :as => :edit_planet
  post '/planets/:id' => 'planets#update'
  get '/planets/:id/delete' => 'planets#destroy', :as => :delete_planet
end
