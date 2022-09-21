Rails.application.routes.draw do
  # get 'flats/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  devise_for :users

  # Defines the root path route ("/")
  # root "articles#index"
  resources :flats
end
