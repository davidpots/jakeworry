json.array!(@podcasts) do |podcast|
  json.extract! podcast, :name, :description, :url_web, :url_rss, :url_itunes, :image
end
