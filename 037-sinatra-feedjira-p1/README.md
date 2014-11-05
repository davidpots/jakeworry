A simple sinatra app that tests using the Feedjira gem.

Specifically, I provide a hard-coded array of RSS feed URLs, and the root route goes through each URL, parses it with Feedjira, and adds the parsed results to an array. That array is passed into the view – which shows the user some info for each item in the array (i.e., the feed's title and number of entries).

Next up:
- I want to setup a simple database and be able to add feeds to it. 
- How would searching iTunes work? does that use the same gem or a different one? It'd actually be like this:

  irb
  require 'itunes-search-api'
  feed = ITunesSearchAPI.search(:term => "sports", :country => "US", :media => "podcast", :attribute => "descriptionTerm")