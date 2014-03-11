# via http://www.robbyonrails.com/articles/2005/05/11/parsing-a-rss-feed



class PagesController < ApplicationController
  def home

    @feeds = [ "http://feeds.99percentinvisible.org/99percentinvisible",
              "http://atp.fm/episodes?format=rss",
              "http://feeds.5by5.tv/amplified",
              "http://www.binnallofamerica.com/podcast.xml",
              "http://baldmove.com/feed/breaking-good-breaking-bad-podcast/",
              "http://batgap.com/feed/podcast",
              "http://feeds.feedburner.com/dancarlin/commonsense?format=xml",
              "http://feeds.feedburner.com/CreativeBriefs",
              "http://feeds.feedburner.com/dancarlin/history?format=xml",
              "http://feeds.feedburner.com/debugshow",
              "http://feeds.muleradio.net/decodedc",
              "http://developingperspective.com/feed/podcast/",
              "http://feeds.feedburner.com/ExecutePodcast",
              "http://expandingmind.podbean.com/feed/",
              "http://revision3.com/foundation/feed/mp4-hd30",
              "http://feeds.feedburner.com/freakonomicsradio",
              "http://sports.espn.go.com/espnradio/podcast/feeds/itunes/podCast?id=9179868",
              "http://hiddenexperience.podbean.com/feed/",
              "http://feeds.5by5.tv/inbeta",
              "http://jimharold.com/?feed=jimharoldscampfire",
              "http://feeds.muleradio.net/mistakes",
              "http://www.londonreal.tv/feed/podcast/",
              "http://feeds.twit.tv/mbw",
              "http://midwestreal.libsyn.com/rss",
              "http://mysteriousuniverse.org/feed/podcast",
              "http://feeds.feedburner.com/soundcloud/JEcj",
              "http://feed.nashownotes.com/rss.xml",
              "http://www.npr.org/rss/podcast.php?id=510019",
              "http://www.npr.org/rss/podcast.php?id=13",
              "http://www.occultofpersonality.net/podcast",
              "http://espn.go.com/espnradio/feeds/rss/podcast.xml?id=2406595",
              "http://feeds.5by5.tv/quit",
              "http://feeds.feedburner.com/RadioMisterioso",
              "http://feeds.wnyc.org/radiolab",
              "http://shoptalkshow.com/feed/podcast/",
              "http://www.skeptiko.com/feed/",
              "http://feeds.feedburner.com/filmcast",
              "http://www.castmate.fm/feed.php?u=drchrisryanpodcast",
              "http://theadamcarollashow.libsyn.com/rss",
              "http://feeds.feedburner.com/TheBryanCallenShow",
              "http://espn.go.com/espnradio/feeds/rss/podcast.xml?id=2864045",
              "http://www.spreaker.com/show/635488/episodes/feed",
              "http://feeds.5by5.tv/criticalpath",
              "http://davidseaman.libsyn.com/rss",
              "http://disinfo.libsyn.com/rss",
              "http://feeds.feedburner.com/TheDrunkenTaoistPodcast",
              "http://lavenderhour.libsyn.com/rss",
              "http://theeastwing.net/feed/podcast",
              "http://feeds.feedburner.com/TheGentlyMad",
              "http://thehighersidechats.com/feed/podcast/",
              "http://feeds.feedburner.com/theindustryradio",
              "http://joeroganexp.joerogan.libsynpro.com/rss",
              "http://thelabyrinth.libsyn.com/rss",
              "http://feeds.newdisrupt.org/nd",
              "http://feeds.feedburner.com/nbsp-new",
              "http://feeds.feedburner.com/theoneswhoknock",
              "http://feeds.muleradio.net/thetalkshow",
              "http://warriorpoet.podomatic.com/rss2.xml",
              "http://feeds.thisamericanlife.org/talpodcast",
              "http://leo.am/podcasts/twig",
              "http://leo.am/podcasts/twit",
              "http://leo.am/podcasts/tri",
              "http://www.uie.com/brainsparks/feed/",
              "http://feeds.feedburner.com/buzzsprout/uJEz",
              "http://nightvale.libsyn.com/rss",
              "http://wtfpod.libsyn.com/rss",
              "http://feeds.feedburner.com/younggunsshow",
              "http://feeds.feedburner.com/twist-audio" ]

    # @feeds.each do |feed|  
    # end

      # require 'rss/2.0'
      # require 'open-uri'

      # open(feed) do |http|
      #   response = http.read
      #   result = RSS::Parser.parse(response, false)

      #   # Set value of each feed item
      #   @title = result.channel.title
      #   @url_web  = result.channel.link
      #   @url_feed = feed
      #   if result.channel.image #&& result.channel.image.url
      #     @url_img = result.channel.image.url
      #   end
      #   @lastBuildDate = result.channel.lastBuildDate
      #   @description = result.channel.description
      # end











        # output  = "<strong>Title:</strong> #{@title}<br />"
        # output += "<strong>Link:</strong> #{@url_web}<br />"
        # output += @url_img.nil? ? "it is nil!<br />" : "#{@url_img}<br />"
        # output += "<strong>Last Build Date:</strong> #{@lastBuildDate}<br />"
        # output += "<strong>Description:</strong> #{@description}<br />"
        # output += "<strong>FEED:</strong> #{feed}<br />"
        # output += "<br />"
        # result.items.each_with_index do |item, i|
        #   output += "#{i+1}. #{item.title}<br />" if i < 10  
        # end
      # end
      # @feed = output.html_safe
    # end

  end
end