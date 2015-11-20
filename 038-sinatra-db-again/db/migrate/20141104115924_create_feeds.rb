class CreateFeeds < ActiveRecord::Migration
 def self.up
   create_table :feeds do |t|
     t.string :url_rss
     t.string :url_itunes
     t.string :title
     t.text :description
     t.timestamps
   end
 end

 def self.down
   drop_table :feeds
 end
end