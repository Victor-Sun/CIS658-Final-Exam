Rails.application.routes.draw do
    resources :categories do
        resources :birthdays
    end
end
