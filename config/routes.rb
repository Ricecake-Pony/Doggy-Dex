Rails.application.routes.draw do
  resources :dog_product_reviews
  resources :dog_products, only: [:index, :show]
  resources :breed_reviews
  resources :breeds, only: [:index, :show]
  resources :users #, only: [:show, :update]

  # This is the manual way to type out the route for user index: get "/users", to: "users#index"

  post '/signup', to: 'users#signup'
  get '/', to: 'application#welcome_home'

  # Session custom routes
  post "/login", to: "sessions#login"
  post "/autologin", to: "sessions#autologin"

  # User custom routes
  get "/users/my_reviews", to: "users#my_reviews"
  patch "/users", to: 'users#update' 
 

  # Defines the root path route ("/")
  # root "articles#index"
end

# Make a landing page of about and navbar with options like login inupts to nav to home.