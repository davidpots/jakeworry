class PagesController < ApplicationController

  def home

    require 'simple-rss'
    require 'open-uri'
    rss = SimpleRSS.parse open('http://joeroganexp.joerogan.libsynpro.com/rss')
    @fox = rss.channel.title

  end
end