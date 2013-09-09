
// bad! don't use
var songs = [
  { 2012: [{"name":"#41"},{"name":"don't push"},{"name":"scarlet begonias"},{"name":"rocky mountain high"}]},
  { 2008: [{"name":"cape canaveral"},{"name":"acid tongue"}]},
  { 1994: [{"name":"linger"},{"name":"sympathy for the devil"}] },
  { 1993: [{"name":"jeremy"},{"name":"alive"}] }
];

// Good, for use in .js files. for JSON, see the next line...
// Note about this formatting -- this is an array, and isn't proper object/JSON format. You can use this in your js files of course. But to make it work in JSON environs, you'll need to make this big array the value in a object key/value pair.
var byYear = [
  { "year" : "2012",
    "songs": [{"name":"#41"},{"name":"don't push"},{"name":"scarlet begonias"},{"name":"rocky mountain high"}]},
  { "year" : "2008",
    "songs": [{"name":"cape canaveral"},{"name":"acid tongue"}]},
  { "year" : "1994",
    "songs": [{"name":"linger"},{"name":"jeremy"}]}
];

  { "title": "Only Son of the Ladiesman",
    "artist": "Father John Misty",
    "year": 2012 },
  { "title": "Stubborn Love",
    "artist": "The Lumineers",
    "year": 2012 },
  { "title": "Ne Me Quitte Pas",
    "artist": "Regina Spektor",
    "year": 2012 },
  { "title": "The Man Who Sold the World",
    "artist": "Nirvana",
    "year": 1994 },
  { "title": "Even Flow",
    "artist": "Pearl Jam",
    "year": 1993 },
  { "title": "Cape Canaveral",
    "artist": "Conor Oberst",
    "year": 2008 },
  { "title": "Acid Tongue",
    "artist": "Jenny Lewis",
    "year": 2008 }
];

var byYear = [
  {}
];

2012 
  song
  song
  song
2008
  song
1994
  song
  song

song
song
song
song
song
song
song