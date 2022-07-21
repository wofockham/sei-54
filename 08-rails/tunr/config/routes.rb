Rails.application.routes.draw do
  get 'users/new'
  root :to => 'pages#home'

  resources :users, :only => [:new, :create]
end
