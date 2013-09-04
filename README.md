# Jake Worry

A cleverly named repo for me to keep track of random jQuery tidbits + explorations, so I can access them later in future coding endeavors. I try to break down each fundamental lesson into a single entry. Most recent exercises are at the top!

---

#### 013: JSON Sorting
Building off of 012, this takes <a href="013 JSON Sorting/acc.json">this JSON file</a> and gives the user a few ways to sort the data -- which they can freely toggle between by means of a UI on the page.

#### 012: JSON + Mustache, via AJAX
Quite simply, this reads <a href="012 JSON + Mustache/data.json">this JSON file</a> via AJAX call and then displays the contents via a mustache template. This is using JSON generated from the most up-to-date version of the Songnotes catalog, sorted by song name.

#### 011 JSON Songcards, part 2
This pulls from <a href="011 Json Songcards, part 2/data.json">this JSON file</a>, which includes data for all songs currently in the <a href="http://www.songnotes.cc">Songnotes</a> catalog. On page load, a random song is pulled from the JSON array and displayed below. My goal here is to begin exploring how I can leverage the Songnotes database in micro-apps that don't require me to use Rails.

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