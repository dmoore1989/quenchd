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
    resources :breweries, except: [:index, :new, :edit]
    resources :venues, except: [:index, :new, :edit]
    resources :likes, only: [:create, :destroy]
  end




end
