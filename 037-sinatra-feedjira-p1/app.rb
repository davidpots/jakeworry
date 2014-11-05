require 'rubygems'
require 'sinatra'
require 'feedjira'

  urls = ['http://mysteriousuniverse.org/feed/podcast',
          'http://www.castmate.fm/feed.php?u=drchrisryanpodcast',
          'http://warriorpoet.podomatic.com/rss2.xml',
          'http://midwestreal.libsyn.com/rss']
  feed_list = []
  urls.each do |url|
    feed = Feedjira::Feed.fetch_and_parse(url)
    feed_list << feed
  end

get "/" do
  @feed_list = feed_list
  erb :index
end