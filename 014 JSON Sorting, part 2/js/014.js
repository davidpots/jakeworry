// ===============================================
// Fetch the data
// ===============================================

      var data;
      $.ajax({
        async: false,
        url: 'songs.json',
        success: function(myJson) {
          data = myJson;
        }
      });
      // the JSON is now songsessible via the variable "data"


// ===============================================
// Attempt #1: Loop through each year, notify me if that year has a song
// ===============================================

      for (var i = 1900; i < 2015; i++) {
        for (var y in data.songs) {
          if (i == data.songs[y].year) {
            // console.log("There is a match in "+i+"!");
          }
        }
      }

// ===============================================
// Attempt #2: Loop through each song, add that song's year to a Years object
// ===============================================


      var songs = [
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

      var yearsObj = {},
          yearsArr = [];

      for(var i = 0; i< songs.length; i++) {
          var num = songs[i].year;
          yearsObj[num] = yearsObj[num] ? yearsObj[num]+1 : 1;
      }

      // Creates an array with the keys from yearsObj
      yearsArr = Object.keys(yearsObj);

      // Show the # of songs in the year 2008
      console.log(yearsObj[2008]);

      // Returns an array of the years that have songs in them
      console.log(yearsArr);

      // This does the same thing as 'Object.keys(years)', but not going to use it b/c it isn't as succinct. via http://encosia.com/using-jquery-1-6-to-find-an-array-of-an-objects-keys/
      // v---v---v---v---v---v
      //     var yearKeys = $.map(years, function(value, key) {
      //       return key;
      //     });

      for (var i = 0; i < yearsArr.length; i++) {
        for ( var x = 0; x < songs.length; x++ ) {
          if (yearsArr[i] == songs[x].year) {
            // console.log(yearsArr[i] + " has a song named " + songs[x].title);
          }
        }
      }

      for (var i in yearsArr) {
        // console.log( index + " : " + yearsArr[index] + "<br />");
        var banana = _.where(songs, { year: yearsArr[i] });
        console.log(yearsArr[i]);
      }

// ****
// After getting help from Phillips, his notes from console are below
// for(var i =0; i < songs.length; i ++){ console.log(songs[i]) }

// var obj = {};

// for(var i =0; i < songs.length; i ++){ obj[songs[i].year]={}}

// obj

// for(var i =0; i < songs.length; i ++){ obj[songs[i].year] = []}


// UNDEFINED IS USED INCORRECTLY BELOW, BUT IDEA REMAINS SOLID 
// for(var i =0; i < songs.length; i ++){ if(obj[songs[i].year] == undefined){ obj[songs[i].year] = []}}

// for(var i =0; i < songs.length; i ++){ if(obj[songs[i].year] == undefined){ obj[songs[i].year] = []} else {obj[songs[i]].push("hello")}}
