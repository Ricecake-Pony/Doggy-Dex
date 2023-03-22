Rails.application.routes.draw do
  resources :dog_product_reviews
  resources :dog_products, only: [:index, :show]
  resources :breed_reviews
  resources :breeds, only: [:index, :show]
  resources :users #, only: [:show, :update]

  # This is the manual way to type out the route for user index: get "/users", to: "users#index"


  # Session custom routes
  post "/login", to: "sessions#create"
  post "login", to: "sessions#login"
 

  # Defines the root path route ("/")
  # root "articles#index"
end
