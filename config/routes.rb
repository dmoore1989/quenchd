Rails.application.routes.draw do
  root to: "static_pages#home"
  resources :users, except: [:index, :show]
  resource :session, only: [:new, :create, :destroy]
  get 'static_pages/home'
  get 'static_pages/landing'

  namespace :api, defaults: {format: :json} do
    resources :beers, except: [:new, :edit]
    resources :check_ins, except: [:new, :edit]
    resources :comments, only: [:create, :destroy, :update]
    resources :users, only: [:show]
    get 'users/sidebar/:id', to: "users#sidebar"
    resources :breweries, except: [:index, :new, :edit]
    resources :venues, except: [:index, :new, :edit]
    resources :likes, only: [:create, :destroy]
    resources :search, only: [:index]
    resources :friend_requests, only: [:create]
    resources :friends, only: [:create, :destroy]
    get 'search/beers', to: 'search#beers'
    get 'search/breweries', to: 'search#breweries'
    get 'search/venues', to: 'search#venues'
    delete 'friend_requests/delete/', to: 'friend_requests#destroy'
    delete 'friends/delete/', to: 'friends#destroy'
  end




end
