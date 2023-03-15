Rails.application.routes.draw do
  resources :breed_images
  resources :breed_heights
  resources :breed_weights
  resources :breeds
  resources :users
 

  # Defines the root path route ("/")
  # root "articles#index"
end
