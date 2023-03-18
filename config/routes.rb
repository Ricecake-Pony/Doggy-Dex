Rails.application.routes.draw do
  resources :dog_product_reviews
  resources :dog_products, only: [:index, :show]
  resources :breed_reviews
  resources :breeds, only: [:index, :show]
  resources :users

  # This is the manual way to type out the route for user index: get "/users", to: "users#index"
  get "/dog_products", to: "dog_products#index"

  # User routes
  # get "/users/:id", to: "users#show"
  # get "/breeds/", to: "breeds#index"
  # get "/breeds/:id", to: "breeds#show"

  # Session custom routes
  post "/login", to: "sessions#create"
  post "login", to: "sessions#login"
 

  # Defines the root path route ("/")
  # root "articles#index"
end
