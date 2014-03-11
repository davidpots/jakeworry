json.array!(@podcasts) do |podcast|
  json.extract! podcast, :title, :url_itunes, :url_web, :url_rss, :description
  json.url podcast_url(podcast, format: :json)
end
