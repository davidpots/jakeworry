# via http://www.robbyonrails.com/articles/2005/05/11/parsing-a-rss-feed

require 'rss/2.0'
require 'open-uri'

class PagesController < ApplicationController
  def home

    feed_url = 'http://mysteriousuniverse.org/feed/podcast'
    output = "<h1>My RSS Reader</h1>" 
    open(feed_url) do |http|
      response = http.read
      result = RSS::Parser.parse(response, false)
      output += "<strong>Title:</strong> #{result.channel.title}<br />"
      output += "<strong>Link:</strong> #{result.channel.link}<br />"
      output += "<strong>Description:</strong> #{result.channel.description}<br />"
      output += "<br />"
      @dog = result.channel./itunes:summary
      # result.items.each_with_index do |item, i|
      #   output += "#{i+1}. #{item.title}<br />" if i < 10  
      # end
    end
    @feed = output.html_safe

  end
end