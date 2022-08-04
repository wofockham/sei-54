Rails.application.routes.draw do
  root :to => 'pages#home' # Entry point

  # API end points
  get '/api/brother' => 'dashboard#brother'
  get '/api/time' => 'dashboard#time'
  get '/api/uptime' => 'dashboard#uptime'
end
