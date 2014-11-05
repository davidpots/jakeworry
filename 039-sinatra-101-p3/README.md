# Intro

I've followed a few tutorials at this, and each of them seems to be off in one small way or another. As I repeat the tutorials in attempt to grasp the core, I wanted to write down a canonical list of steps for setting things up. This is referencing / pulling from these two tutorials:

- http://mherman.org/blog/2013/06/08/designing-with-class-sinatra-plus-postgresql-plus-heroku/#.VFfwLlPF-Do
- http://www.danneu.com/posts/15-a-simple-blog-with-sinatra-and-active-record-some-useful-tools/

## File setup and database creation

### .ruby-version

This might be some weird thing with my `rvm` settings, but including this file keeps errors from popping up. I use 2.0.0. Fill the file with this:

    2.0.0

### Gemfile

    source 'https://rubygems.org'
    ruby "2.0.0"
    
    gem "sinatra"
    gem "activerecord"
    gem "sinatra-activerecord"
    
    group :development do
      gem 'sqlite3'
      gem "tux"
    end
    
    group :production do
      gem 'pg'
    end

### config.ru

    # tell Heroku what to load
    require './app'
     
    # tell Heroku what to do
    run Sinatra::Application

### app.rb

Of course, this assumes you'll have a modal named "Post".

    require 'sinatra'
    require 'sinatra/activerecord'
    require './environments'
    
    class Post < ActiveRecord::Base
    end

### environments.rb

    configure :development do
      set :database, 'sqlite3:dev.db'
      set :show_exceptions, true
    end
    
    configure :production do
      db = URI.parse(ENV['DATABASE_URL'] || 'postgres:///localhost/mydb')
    
      ActiveRecord::Base.establish_connection(
        :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
        :host     => db.host,
        :username => db.user,
        :password => db.password,
        :database => db.path[1..-1],
        :encoding => 'utf8'
      )
    end

At this point, you should be able to run `tux` and it works.

### Rakefile

    require './app'
    require 'sinatra/activerecord/rake'
    
### Database setup

From terminal, run:

    rake db:create_migration NAME=create_posts

Which should create `db/migrate/20141104184208_create_posts.rb`. Edit the migration file to look like this:

    class CreatePosts < ActiveRecord::Migration
     def self.up
       create_table :posts do |t|
         t.string :title
         t.text :body
         t.timestamps
       end
     end
    
     def self.down
       drop_table :posts
     end
    end

Then do

    rake db:migrate

## Setting up the views

Coming soon.