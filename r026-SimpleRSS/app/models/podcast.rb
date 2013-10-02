class Podcast < ActiveRecord::Base

  def self.get_entries(feed_url)
    feed = Feedzirra::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      puts entry.title
    end
  end

  def self.add_feeds(urls)

    @failed_feeds = []

    # Loop through each feed...
    urls.each do |feed_url|

      @legit = true

      success = lambda do |url, feed|
        puts "SUCCESS - #{feed.title} - #{url}"
        @legit == true
      end


      failure = lambda do |url, response_code, header, body|
        @failed_feeds << url if response_code == 200
        puts "*********** FAILED with #{response_code} on #{url}"
        @legit == false
      end

      if @legit == true

        # Parse the feed with Feedzirra
        @feed = Feedzirra::Feed.fetch_and_parse(feed_url, :on_success => success, :on_failure => failure)

        # Set value of each feed item
        @name    = @feed.title
        @url_web = @feed.url
        @url_rss = @feed.feed_url
        if @feed.itunes_image.nil?
          @image = @feed.image.gsub("\t","").gsub("\n","").gsub(" ","")
        else
          @image = @feed.itunes_image
        end
        @description = @feed.description

        # put it into the DB
        create!(
          :name          => @name,
          :description   => @description,
          :image         => @image,
          :url_web       => @url_web,
          :url_rss       => @url_rss
        )

      end 

    end

  end

end
