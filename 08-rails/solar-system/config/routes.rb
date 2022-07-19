Rails.application.routes.draw do
  # This file will cause the most suffering today
  get '/planets' => 'planets#index'
  get '/planets/:id' => 'planets#show', :as => :planet
end
