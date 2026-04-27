Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]

  # OR, if using Devise (the helper is usually new_user_session_path)
  resources :passwords, param: :token
  namespace :admin do
    resources :searches
    resources :filters
    resources :countries
    resources :carts
    resources :auths
    resources :wishlists
    resources :orders
    resources :policies
    resources :payment_methods
    resources :addresses
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
