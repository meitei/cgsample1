set :rails_env, 'staging'

require 'bundler/capistrano'
set :bundle_flags, "--no-deployment --without production"

server "rubycenter.net", :app, :web, :db, :primary => true

set :deploy_to, '/home/rc00013/project/'
set :user, 'rc00013'
set :ssh_options, :port => "32131"
set :use_sudo, false 
default_run_options[:pty] = true

#namespace :deploy do
#  %w(start restart).each { |name| task name, :roles => :app do mod_rails.restart end }
#end