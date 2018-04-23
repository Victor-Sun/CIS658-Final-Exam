Rails.application.routes.draw do
  resources :trips do
    resources :expenses
  end
end
