# app.rb

require 'sinatra'
require 'sinatra/activerecord'
# require "sinatra/activerecord/rake"
require './environments'

class Post < ActiveRecord::Base
end

get '/' do
  erb :index
end