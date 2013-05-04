JqgridSample::Application.routes.draw do

  resources :seihins do
    get 'search', :on => :collection
  end

  resources :users do
      get 'search', :on => :collection
  end

  resources :kansei_buhins do
      get 'search', :on => :collection
  end

  resources :shains do
      get 'search', :on => :collection
  end

  resources :mitsumoris

  resources :mitsumori_tankas

  resources :hoken_shubetsus do
    get 'search', :on => :collection
  end

 resources :shobyos do
    get 'search', :on => :collection
  end

  resources :byoins do
    get 'search', :on => :collection
  end

  resources :kokyakus do
    get 'search', :on => :collection
    post 'delete_list', :on => :collection
  end

  get "item_extend/search"

  get "report/report"
  get "report/report_mitsumori"

  get "kanseizu/show"
  get "kanseizu/show_mitsumori"

  resources :items do
    get 'report', :on => :collection
    get 'image', :on => :collection
  end

  resources :toukeis do
    get 'search', :on => :collection
    get 'move_page', :on => :collection
    post 'graph', :on => :collection
    get 'graph_data', :on => :collection
  end

  resources :konyu_rirekis do
    post 'search', :on => :collection
    post 'file_upload', :on => :collection
    get 'get_image', :on => :collection
    post 'delete_list', :on => :collection
  end
  # match ':controller(/:action(/:id))(.:format)', :to => 'konyu_rirekis#get_image'
  match 'konyu_rirekis(/get_image(/:id))(.:format)', :to => 'konyu_rirekis#get_image'

  resources :common_data do
    get 'kokyaku_list', :on => :collection
    get 'user_list', :on => :collection
    get 'byoin_list', :on => :collection
    get 'seihin_list', :on => :collection
    get 'shobyo_list', :on => :collection
  end

  resources :companies

  match 'login' => 'sessions#new', :as => :login
  match 'logout' => 'sessions#destroy', :as => :logout
  resources :users
  resources :sessions

  get "sessions/new"

  get "users/new"

  get "welcome/index"

  root to: 'welcome#index'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
