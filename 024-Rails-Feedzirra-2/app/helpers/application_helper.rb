module ApplicationHelper

  def parse_feed(feed)
    require 'rss/2.0'
    require 'open-uri'

    open(feed) do |http|
      response = http.read
      result = RSS::Parser.parse(response, false)

      # Set value of each feed item
      @title = result.channel.title
      @url_web = result.channel.link
      @url_rss = feed
      if result.channel.image #&& result.channel.image.url
        @url_img = result.channel.image.url
      else
        @url_img = ""
      end 
      @lastBuildDate = result.channel.lastBuildDate
      @description = result.channel.description
    end
  end

end
