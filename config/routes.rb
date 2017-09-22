Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'photos#index'
  resources :photos

  post 'uploads', to: 'photos#upload'
  post 'uploads_finish', to: 'photos#finish'
  delete 'delete_uploads', to: 'photos#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
