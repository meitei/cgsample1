#set :application, "jqgrid_sample"
#set :repository,  "set your repository location here"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#role :web, "your web-server here"                          # Your HTTP server, Apache/etc
#role :app, "your app-server here"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end
require 'capistrano/ext/multistage'
require 'capistrano_colors'

set :application, "sample"

# gitリポジトリの設定
set :repository,  "git@heroku.com:cryptic-coast-7858.git"
set :scm, :git
set :branch, "master"
set :deploy_via, :remote_cache

# -*- coding: utf-8 -*-
#set :stages, %w{staging production}
#set :default_stage, "production"
#set :default_stage, "staging"

# 複数環境にデプロイできるようにする
#require "capistrano/ext/multistage"

# capistranoの出力をカラーに
#require 'capistrano_colors'

# cap deploy時に自動で bundle installを実行
#require "bundler/capistrano"

# RVM
#require "rvm/capistrano"
#### RVMで利用するRubyのバージョンを設定(1.9.3を変更) ####
#set :rvm_ruby_string, '1.9.3'
#set :rvm_type, :user

# gitリポジトリの設定
#### gitリポジトリをセット ####
#set :repository,  "git@heroku.com:cryptic-coast-7858.git"
# set :scm, :git
# set :branch, "master"
# set :deploy_via, :remote_cache

# SSH
# set :use_sudo, true
# set :default_run_options, :pty => true
# ssh_options[:forward_agent] = true

#set :normalize_asset_timestamps, false
# 過去のデプロイしたフォルダを履歴として保持する数
#set :keep_releases, 10

# namespace :deploy do
#   # Passengerの実行ユーザー/Groupをセット
#   task :set_file_process_owner do
#     sudo "chown -R #{user}:#{user_group} #{deploy_to}"
#   end
# end
# before :deploy, "deploy:set_file_process_owner"
# after :deploy, "deploy:migrate"
