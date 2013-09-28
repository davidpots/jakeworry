# THIS IS THE MAGIC FUCKING BULLET
Feedzirra::Feed.add_feed_class(Feedzirra::Parser::ITunesRSS)

# This works but is unneccessaryfi you use the wholesale iTunesRSS above
Feedzirra::Feed.add_common_feed_element('itunes:summary', :as => :itunessummary)

# I tried using it like this, which doesn't work b/c the image is in the href attribute
Feedzirra::Feed.add_common_feed_element('itunes:image', :as => :itunesimage)

# But, you can even do this for namespace issues AND attr issues, at once! YES. So happy.
Feedzirra::Feed.add_common_feed_element('atom:link', :value => :href, :as => :atom_href)

# check out how this guy does it too... specificying the attributes he wants, oooooh
# https://github.com/nerdyworm/flowfeeds/blob/8c159da9e75d8af487bc2ec5c826f3f2610674e0/config/initializers/feedzirra.rb

