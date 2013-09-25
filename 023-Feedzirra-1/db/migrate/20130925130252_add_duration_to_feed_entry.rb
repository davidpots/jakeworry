class AddDurationToFeedEntry < ActiveRecord::Migration
  def change
    add_column :feed_entries, :duration, :string
  end
end
