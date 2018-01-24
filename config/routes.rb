Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/check", to: "games#check"
  resources :games, only: [:new, :update, :create, :index, :show]
end
