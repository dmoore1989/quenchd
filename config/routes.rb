Rails.application.routes.draw do
  root to: "static_pages#home"
  resources :users, except: [:index]
  resource :session, only: [:new, :create, :destroy]
  get 'static_pages/home'
  get 'static_pages/landing'

  namespace :api, defaults: {format: :json} do
    resources :beers, except: [:new, :edit]
    resources :check_ins, except: [:new, :edit]
    resources :comments, except: [:new, :edit, :show]
  end




end
