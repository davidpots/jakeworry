class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :name
      t.text :description
      t.string :url_web
      t.string :url_rss
      t.string :url_img

      t.timestamps
    end
  end
end
