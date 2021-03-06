Rails.application.routes.draw do
  root to: "books#index"
  get '/login', to: 'sessions#new'
  get '/logout', to: 'sessions#destroy'
  # post '/login', to: 'sessions#create'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :books do
  	resources :notes, only: [:create, :destroy]
  end

  resources :sessions, only: [:new, :create, :destroy]


end
