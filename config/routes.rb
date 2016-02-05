Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'auth/facebook/callback', to: 'sessions#omniauth_facebook'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create]
    resources :comments, only: [:create]
    resources :timeline, only: [:index]
    resources :users, only: [:show] do
      resources :posts, only: [:index]
      resources :photos, only: [:index, :create]
      resources :friendships, only: [:index, :show, :create]
    end
    get "search", to: "search#user_search"
  end
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end
