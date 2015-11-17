Rails.application.routes.draw do
  root to: "static_pages#home"
  resources :users, except: [:index]
  resource :session, only: [:new, :create, :destroy]
  get 'static_pages/home'
  get 'static_pages/landing'


end
