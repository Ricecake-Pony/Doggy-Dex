Rails.application.routes.draw do
  resources :breed_reviews
  resources :breeds
  resources :users
 

  # Defines the root path route ("/")
  # root "articles#index"
end
