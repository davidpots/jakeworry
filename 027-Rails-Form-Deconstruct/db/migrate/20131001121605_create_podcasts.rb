class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :url_itunes
      t.string :url_web
      t.string :url_rss
      t.string :description

      t.timestamps
    end
  end
end
