# via http://www.robbyonrails.com/articles/2005/05/11/parsing-a-rss-feed

require 'rss/2.0'
require 'open-uri'

class PagesController < ApplicationController
  def home
    # feed_url = 'http://joeroganexp.joerogan.libsynpro.com/rss'

    output = "<h1>My Podcasts</h1>" 

    feeds = [ "http://feeds.feedburner.com/TheDrunkenTaoistPodcast",
              "http://lavenderhour.libsyn.com/rss",
              "http://joeroganexp.joerogan.libsynpro.com/rss",
              "http://www.londonreal.tv/feed/podcast/",
              "http://midwestreal.libsyn.com/rss",
              "http://mysteriousuniverse.org/feed/podcast",
              "http://www.castmate.fm/feed.php?u=drchrisryanpodcast",
              "http://warriorpoet.podomatic.com/rss2.xml" ]

    feeds.each do |feed|  
      open(feed) do |http|
        response = http.read
        result = RSS::Parser.parse(response, false)

        @result_channel_title = result.channel.title
        @result_channel_link  = result.channel.link
        if result.channel.image #&& result.channel.image.url
          @result_channel_image_url = result.channel.image.url
        end
        @result_channel_lastBuildDate = result.channel.lastBuildDate
        @result_channel_description = result.channel.description

        output += "<strong>Title:</strong> #{@result_channel_title}<br />"
        output += "<strong>Link:</strong> #{@result_channel_link}<br />"
        if @result_channel_image_url.nil?
          output += "it is nil!<br />"
        else 
          output += "#{@result_channel_image_url}<br />"
        end
        # result.channel.image.url.empty? ? nil : output += "<strong>Image:</strong> #{result.channel.image.url}<br />"
        output += "<strong>Last Build Date:</strong> #{@result_channel_lastBuildDate}<br />"
        output += "<strong>Description:</strong> #{@result_channel_description}<br />"
        output += "<br />"
        # result.items.each_with_index do |item, i|
        #   output += "#{i+1}. #{item.title}<br />" if i < 10  
        # end
      end
      @feed = output.html_safe
    end

  end
end