Rails.application.routes.draw do
  root 'tweets#index'
  devise_for :users

  resources :tweets, only: [:index, :new]
  # resources :luvs, only: [:index]
end
