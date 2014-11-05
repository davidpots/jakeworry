A simple sinatra app that tests using the Feedjira gem.

Specifically, I provide a hard-coded array of RSS feed URLs, and the root route goes through each URL, parses it with Feedjira, and adds the parsed results to an array. That array is passed into the view – which shows the user some info for each item in the array (i.e., the feed's title and number of entries).

Next up:
- I want to setup a simple database and be able to add feeds to it. 
- How would searching iTunes work? does that use the same gem or a different one? It'd actually be like this:

  irb
  require 'itunes-search-api'
  feed = ITunesSearchAPI.search(:term => "sports", :country => "US", :media => "podcast", :attribute => "descriptionTerm")
  
UPDATES:

11/4 @ 10:22pm

Great success! I start with rendering all available episodes for a given feed. Then if you click on one of these episodes, I am able to pass along that episode's `entry_id` as a parameter to the next page. I then read that parameter and use it to load more info about that specific episode. Great success! Build on this later / tomorrow / next.