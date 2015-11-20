INTRO

A simple sinatra app that tests using the Feedjira gem. See previous projects (40, 39) for the steps that got me here.

WHAT THIS DOES

In project 40, I took a single podcast feed URL, parsed & displayed all episodes, and let a user click on a single episode (and transfered the necessary params to eventually target and add that episode to the database).

This project (41) takes that a step further: instead of starting with a single hard-coded URL, I hard-code an array of many URLs and render them all. A user clicks on (and I pass the params along) to a list of episodes... a user clicks on (I pass the params along) and the episode details are then displayed – and that ep could theoretically be added to a database.

WHAT'S NEXT

I think this is proof of concept enough where I can move on to the database phase. First is creating a modal for URLS (or podcasts or feeds), which start with a single URL. Then I can start building out that list and have it as a starting point for future iterations. Then, I should build out a model for episodes (that a user adds) -- and we can work on CRUD actions for podcasts and episodes. This gets us pretty close to where we want to go, fundamentally!