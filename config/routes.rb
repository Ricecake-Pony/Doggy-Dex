Rails.application.routes.draw do
  resources :dog_product_reviews
  resources :dog_products, only: [:index, :show]
  resources :breed_reviews
  resources :breeds, only: [:index, :show]
  resources :users #, only: [:show, :update]

  # This is the manual way to type out the route for user index: get "/users", to: "users#index"

  post '/signup', to: 'users#signup'

  # Session custom routes
  post "/login", to: "sessions#login"
  get "/login", to: "sessions#existing_user"

  # get "/auto_login", to: "sessions#auto_login"
 

  # Defines the root path route ("/")
  # root "articles#index"
end

# Make a landing page of about and navbar with options like login inupts to nav to home.