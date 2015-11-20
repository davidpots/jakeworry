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
  redirect to('/podcast')
end

get "/podcast" do
  @feeds = []
  urls.each do |url|
    @feeds << Feedjira::Feed.fetch_and_parse(url)
  end
  erb :podcast
end

get "/feed" do
  @i = params[:feed_url].to_i
  @feed = Feedjira::Feed.fetch_and_parse(urls[@i])
  erb :feed
end

get '/entry' do
  @entry_id = params[:entry_id]
  @url_id = params[:url_id].to_i
  feed = Feedjira::Feed.fetch_and_parse(urls[@url_id])
  episode_index = feed.entries.index {|h| h[:entry_id] == @entry_id}
  @episode = feed.entries[episode_index]
  erb :episode
end