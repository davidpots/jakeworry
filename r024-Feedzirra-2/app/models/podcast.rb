class Podcast < ActiveRecord::Base

  def self.update_from_feed(feed_url)
    feed = Feedzirra::Feed.fetch_and_parse(feed_url)
    create!(
      :name         => feed.title,
      :url_web      => feed.url,
      :description  => feed.description
    )
  end

end
