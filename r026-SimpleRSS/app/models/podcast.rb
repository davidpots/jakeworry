class Podcast < ActiveRecord::Base

  def self.add_one(feed)

    # read the feed
    rss = SimpleRSS.parse open(feed)
    rss = SimpleRSS.parse open("http://joeroganexp.joerogan.libsynpro.com/rss")
    

    # Set value of each feed item
    @name = rss.channel.title
    @url_web = rss.channel.link
    @url_rss = feed
    # if rss.channel.image #&& result.channel.image.url
    #   @url_img = rss.channel.image.url
    # else
    #   @url_img = ""
    # end
    @description = rss.channel.description

    # put it into the DB
    create!(
      :name          => @name,
      :description   => @description,
      :url_web       => @url_web,
      :url_rss       => @url_rss
    )

  end

end
