Rails.application.routes.draw do
  resources :dog_product_reviews
  resources :dog_products
  resources :product_reviews
  resources :breed_reviews
  resources :breeds
  resources :users
 

  # Defines the root path route ("/")
  # root "articles#index"
end
