set :rails_env, 'staging'

require 'bundler/capistrano'
set :bundle_flags, "--no-deployment --without production"

server "rubycenter.net", :app, :web, :db, :primary => true

set :deploy_to, '/home/rc00013/project/'
set :current_dir, 'current'
set :user, 'rc00013'
set :ssh_options, :port => "32131"
set :use_sudo, false 
default_run_options[:pty] = true

namespace :mod_rails do
  desc <<-DESC
  Restart the application altering tmp/restart.txt for mod_rails.
  DESC
  task :restart, :roles => :app do
    run "touch  #{File.join(deploy_to, current_dir)}/tmp/restart.txt"
  end
end

namespace :deploy do
  %w(start restart).each { |name| task name, :roles => :app do mod_rails.restart end }
end