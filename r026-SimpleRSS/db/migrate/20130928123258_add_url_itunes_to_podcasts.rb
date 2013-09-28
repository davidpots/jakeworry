class AddUrlItunesToPodcasts < ActiveRecord::Migration
  def change
    add_column :podcasts, :url_itunes, :string
  end
end
