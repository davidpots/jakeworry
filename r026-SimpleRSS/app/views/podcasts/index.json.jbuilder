json.array!(@podcasts) do |podcast|
  json.extract! podcast, :name, :description, :url_web, :url_rss, :url_itunes, :image
  json.url podcast_url(podcast, format: :json)
end
