== 023: Feedzirra #1

This is my first delve into using Feedzirra. I started this off with the intention of following along with this Railscast: http://railscasts.com/episodes/168-feed-parsing?view=asciicast

#### App Setup

Right away I ran into a few problems b/c of the relative old age of this Railscast. Here are some of the things I had to do to get things working:

- Tweak the gemfile (I load feedzirra using `gem 'feedzirra', "~> 0.2.0.rc2"`, modeled after how Phillips loads it in Followcast).
- Ignore the tutorial's instruction to add the `config.gem` line to your `environment.rb` -- this threw an error, and it looks like in Rails 3+ it isn't required. Seems to work for me so far without it, but if I run into problems later I might need to dig deeper.
- Tweak the syntax of the `rails/generate` command that the tutorial uses. Instead, I used `rails generate model feed_entry [...]` which worked fine.

#### Moving along

From there, things worked fine. I was able to recreate the tutorial's demo app without any trouble. 

#### Pulling in iTunes metadata

One good next step I added was updating the model to account for additional metadata snippets not accounted for in the tutorial. One example was "duration". To add it, I had to do the usual:

1. Generate a new migration -- `rails generate migration add_duration_to_feed_entry duration:string`
2. Update the `models/feed_entry.rb` file -- I added `:duration => entry.itunes:duration`

...but this didn't work -- I suspect because of the colon syntax used in `itunes:duration`. To make this play nice, I looked how Phillips did it in Followcast and saw he added a new file in `config/initializers` which accounted for these weird metadata tags. I mimicked what he did exactly into my `config/initializers/feedzirra.rb` file, and then had to (1) run a new migration, (2) update the class in models/feed_entry.rb, and then (3) restart console. Only then could I, via console, run the `Feedzirra.update_from_feed` command in console. But it worked.

#### Next steps

In my next project, I want to check out how I can pull in the data for the generic feed itself -- and not the individual entries. Phillips handles this in his code by doing something like `RSS::ITunesChannelModel::ITunesCategory` for example. Check that out and proceed.