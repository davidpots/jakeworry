class PagesController < ApplicationController
  def home
    @podcasts = Podcast.find(:all)
  end
end