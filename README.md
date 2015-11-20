# Jake Worry

This is a repository of front-end development tidbits and explorations. Each project is given a directory and focuses on a single technique. One chief goal with this is to leave myself a trail of helpful breadcrumbs so I can reference past lessons learned and tricks figured out. This is named "Jake Worry" as a clever way to disguise my interest in jQuery -- though quickly the topic of these explorations jumped to native Javascript, as well as Rails / CSS / etc.

Here are a few "finished" projects I created after sharpening my skillset on  these exercises: 

- <a href="http://davidpots.com/gifparade">GIF Parade</a> (combine multiple GIFs + Youtube music) from September 19, 2013
- <a href="http://davidpots.com/jakeworry/019-JSON-Songnotes-Mobile/019.html">Songnotes mobile</a> (mobile-friendly catalog listing via JSON) from September 13, 2013
- <a href="http://davidpots.com/fireflygrove/">Firefly Grove</a> (SoundCloud API + jQuery layout) from August 21, 2013


---

#### 023: Feedzirra Intro
Where I check out using the Feedzirra ruby gem to parse feeds. This mainly follows along with the tutorial that RailsCasts did on the topic: http://railscasts.com/episodes/168-feed-parsing?view=asciicast

#### 022: Javascript parsing of external XML Feeds
In which I explore the possibilities, and impossibilities, of parsing external XML feeds with Javascript alone. Tried a lot of techniques -- but many challenges (cross origin resource sharing), and possible hacky solutions -- but probably going to try Ruby solutions instead (next project).

#### 021: URL Encoding
Explores how I might use URL encoding to compress super long URLs for GIF Parade. Ultimately, this won't work for what I need – but I still learned some cool stuff here.

#### 020: LoudGIF Spinoff
Explores how I might hack the LoudGIF concept to work for many GIFs. I forked this into its own project (GIF Parade): http://davidpots.com/gifparade and http://github.com/davidpots/gifparade

#### 019: Songnotes Mobile
The culmination of 010 through 018 -- where I take a JSON feed of the latest Songnotes song listing and display it in a mobile-friendly manner.

#### 018: JSON Grouping, part 4
In progress. Refines 017 to be much more elegant, using less repeated code. Not complete yet.

#### 017: JSON Grouping, part 3
Another pass at refining + adding complexity to the grouping code I wrote in 014 and 015. This starts with the same flat JSON song list, and the manipulates the data to be grouped by either song title, aritst, or year. Also begins using some text replacement / regex to tweak strings to my needs.

#### 016: JSON + Mustache, refined
A quick pass to refine the basic template I'm using to work with JSON/AJAX/JS/Mustache, via help from Brody.

#### 015: JSON Grouping, part 2
More of the same from 014, but the code is cleaned up quite a bit (and brings in some of the refinements from 016). Lets users view songs by default sort order, or grouped by year.

#### 014: JSON Grouping
In which we take an array of song objects, group them by year, and display the year-groups from newest to oldest. Re-covering some core fundamentals of handling objects, arrays, and the like. Next project, I'll want to clean up + make more efficient this code, as well as eventually let users group by anything (not just 'year').

#### 013: JSON Sorting
Building off of 012, this takes a JSON file and gives the user a few ways to sort the data -- which they can freely toggle between by means of a UI on the page.

#### 012: JSON + Mustache, via AJAX
Quite simply, this reads a JSON file via AJAX call and then displays the contents via a mustache template. This is using JSON generated from the most up-to-date version of the Songnotes catalog, sorted by song name.

#### 011 JSON Songcards, part 2
This pulls from a JSON file, which includes data for all songs currently in the <a href="http://www.songnotes.cc">Songnotes</a> catalog. On page load, a random song is pulled from the JSON array and displayed below. My goal here is to begin exploring how I can leverage the Songnotes database in micro-apps that don't require me to use Rails.

#### 010 HTML to JSON
Wanting to explore different ways to get my Postgres database content into customized JSON format, I explore using a HTML-to-JSON jQuery plugin.

#### 009 JSON Songcards
Reads from a JSON file containing a few dozen records. Picks one at random + generates some random graphical lines that aniamte into place. A prototype leading to what will be project 011.

#### 008 JSON 101

Explores some fundamental things you can do loading content into HTML via JSON. Including: (1) displaying content from a JSON source file, (2) counting the # of objects in a JSON feed, and (3) selecting a random item from a JSON feed.

#### 007 Animation 101

Quick review of core fundies of jQuery animation + random number generation + JS looping. Simple goal with this exercise is to give a variable width to each line of faux text in a graphical version of a document.

#### 006 Mustache 101

Quick review of the core fundamentals of Mustache. Based on this, and then simplified even further: http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-using-the-mustache-template-library/

#### 005 Artsy Columns, part 4

This is the culmination of the previous few projects. I take the Artsy-style layout, with all the intriciacy, and make the fixed-column-interaction work for all `<article>` items on the page, however many there may be.

#### 004 Artsy Columns, part 3

Here, I solve the issue of "scaling up" the mechanism to work with all 'article' items on the page. Note, that this is based off '002' and doesn't yet include all effects required for my desired implementation. That will be next.

#### 003 Artsy Columns, part 2

Before scaling up my mechanism to work on all 'article' items on the page, I instead delve into the effect/interaction on the single 'article'. Now it fixes itself on the top, or bottom -- depending on your page position and scroll direction.

#### 002 Artsy Columns

Getting nitty gritty with recreating the fixed column effect used at http://artsy.net/posts/featured. In 002, I get the mechanism to work on a single 'article' amongst a page of many articles. From here, I will (in future lessons) scale it up to work on all 'articles' on the page.

#### 001 inView

Quick exploration of the inView plugin, used to determine when an element is in the user's window view
