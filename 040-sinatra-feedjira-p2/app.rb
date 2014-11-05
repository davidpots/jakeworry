require 'rubygems'
require 'sinatra'
require 'feedjira'

require 'uri'
require 'cgi'


  urls = ['http://mysteriousuniverse.org/feed/podcast',
          'http://www.castmate.fm/feed.php?u=drchrisryanpodcast',
          'http://warriorpoet.podomatic.com/rss2.xml',
          'http://midwestreal.libsyn.com/rss']

get "/" do
  @feed = Feedjira::Feed.fetch_and_parse('http://mysteriousuniverse.org/feed/podcast')
  erb :index
end

get '/entry' do
  @entry_id = params[:entry_id]
  feed = Feedjira::Feed.fetch_and_parse('http://mysteriousuniverse.org/feed/podcast')
  episode_index = feed.entries.index {|h| h[:entry_id] == @entry_id}
  @episode = feed.entries[episode_index]
  erb :episode
end