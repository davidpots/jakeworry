# configure extra attributes for feedzirra.  This will enable all the itunes specific attributes
[{:name => "media:thumbnail", :value => :url, :as => :thumbnail},
 {:name => "media:content",:value => :url, :as => :media},
 {:name => "media:content",:value => :type, :as => :media_type},
 {:name => "itunes:image", :as => :itunes_image},
 {:name => "itunes:duration", :as => :duration},
 {:name => "itunes:explicit", :as => :explicit},
 {:name => "itunes:subtitle", :as => :subtitle},
 {:name => "description", :as => :description},
 {:name => "enclosure", :value => :url, :as => "enclosure_url"},
 {:name => "enclosure", :value => :type, :as => "enclosure_type"},
 {:name => "enclosure", :value => :length, :as => "enclosure_length"}
].each do |attribute|
  options = {:as => attribute[:as], :value => attribute[:value]}.reject{|key, value| value.nil?}
  Feedzirra::Feed.add_common_feed_entry_element(attribute[:name], options) 
end
