Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/ogalo-numbers' => 'pages#numbers', :as => :numbers # keep the original name
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
end
