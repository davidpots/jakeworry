class Podcast < ActiveRecord::Base

  def self.add_one(feed)

    require 'rss/2.0'
    require 'open-uri'

    # get the RSS ready
    open(feed) do |http|
      response = http.read
      result = RSS::Parser.parse(response, false)

      # Set value of each feed item
      @name = result.channel.title
      @url_web = result.channel.link
      @url_rss = feed
      if result.channel.image #&& result.channel.image.url
        @url_img = result.channel.image.url
      else
        @url_img = ""
      end
      @description = result.channel.description
    end

    # put it into the DB
    create!(
      :name          => @name,
      :description   => @description,
      :url_web       => @url_web,
      :url_img       => @url_img,
      :url_rss       => @url_rss
    )

  end

  def self.add_many(feeds)

    require 'rss/2.0'
    require 'open-uri'

    # go through each feed in the array...
    feeds.each do |feed|

      # get the RSS ready
      open(feed) do |http|
        response = http.read
        result = RSS::Parser.parse(response, false)

        # Set value of each feed item
        @name = result.channel.title
        @url_web = result.channel.link
        @url_rss = feed
        if result.channel.image #&& result.channel.image.url
          @url_img = result.channel.image.url
        else
          @url_img = ""
        end
        @description = result.channel.description
      end

      # put it into the DB
      create!(
        :name          => @name,
        :description   => @description,
        :url_web       => @url_web,
        :url_img       => @url_img,
        :url_rss       => @url_rss
      )
    end
  end

  def self.update_from_feed(feed_url)
    feed = Feedzirra::Feed.fetch_and_parse(feed_url)
    create!(
      :name         => feed.title,
      :url_web      => feed.url,
      :description  => feed.description
    )
  end

end