Rails.application.routes.draw do
  resources :expenses do
    resources :trips
  end
end
