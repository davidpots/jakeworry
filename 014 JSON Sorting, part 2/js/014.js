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

      // Looks up any value (val) in array (arr). Returns TRUE if that val exists in the arr.
      function lookup(arr,val) {
        for(var i = 0, len = arr.length; i < len; i++) {
          if( arr[i] === val) {
            return true;
          }
        }
        return false;
      }

      // Creates an array of ONLY the years that have songs in them
      // NEXT PROJECT: combine this with the next chunk of code
      var years = [];
      for (var i = 0; i < songs.length; i++) {
        if (!(lookup(years,songs[i].year))) {
          years.push(songs[i].year);
        }
      }

      // Sets up "byYear" array, which is an array of Year objects
      // NEXT PROJECT: combine this w/ the prior chunk of code
      var byYear = [];
      for (var i = 0; i < years.length; i++) {
        givenYear = {};
        givenYear.year = years[i];
        givenYear.songs = [ ];
        byYear.push(givenYear);
      }

      // Go through each year, and then each song, and add the song to that year in byYear if it matches
      // NEXT PROJECT: combine this with the chunks above, lookup a more efficient way to do this
      for (var x = 0; x < byYear.length; x++) {
        for (var i = 0; i < songs.length; i++) {
          if (byYear[x].year == songs[i].year) {
            console.log(songs[i]);
            byYear[x].songs.push(songs[i]);
          }
        }        
      }
      // use JSON.stringify(byYear) to view the goodness




























      // byYear = [ {year:2012}, {year:2008}, {year:1993}, {year:1994} ]

      // for (var i = 0; i < yearArr.length; i++) {
      //   console.log(yearArr[i]);
      // }

      // byYear = [];
      // for (var i = 0; i < songs.length; i++) {
      //   byYear.push(songs[i].year);
      //   console.log(byYear);
      // }

      // yearsObj = {};
      // for(var i = 0; i< songs.length; i++) {
      //     var num = songs[i].year;
      //     yearsObj[num] = yearsObj[num] ? yearsObj[num]+1 : 1;
      //     console.log(yearsObj[num]);
      // }

      // 1. get the years in play
      // 2. go through each year in play, 
      //      go through each song,
      //        if song.year = inplay.year
      //          add song to yearCollection

      // 1. go through each song
      //      if song.year doesn't exist, add it to yearCollection
      //        add song to yearCollection






      // var yearsObj = {},
      //     yearsArr = [];

      // for(var i = 0; i< songs.length; i++) {
      //     var num = songs[i].year;
      //     yearsObj[num] = yearsObj[num] ? yearsObj[num]+1 : 1;
      // }

      // // Creates an array with the keys from yearsObj
      // yearsArr = Object.keys(yearsObj);

      // // Show the # of songs in the year 2008
      // console.log(yearsObj[2008]);

      // // Returns an array of the years that have songs in them
      // console.log(yearsArr);

      // This does the same thing as 'Object.keys(years)', but not going to use it b/c it isn't as succinct. via http://encosia.com/using-jquery-1-6-to-find-an-array-of-an-objects-keys/
      // v---v---v---v---v---v
      //     var yearKeys = $.map(years, function(value, key) {
      //       return key;
      //     });

      // for (var i = 0; i < yearsArr.length; i++) {
      //   for ( var x = 0; x < songs.length; x++ ) {
      //     if (yearsArr[i] == songs[x].year) {
      //       // console.log(yearsArr[i] + " has a song named " + songs[x].title);
      //     }
      //   }
      // }

      // for (var i in yearsArr) {
      //   // console.log( index + " : " + yearsArr[index] + "<br />");
      //   var banana = _.where(songs, { year: yearsArr[i] });
      //   console.log(yearsArr[i]);
      // }

// ****
// After getting help from Phillips, his notes from console are below
// for(var i =0; i < songs.length; i ++){ console.log(songs[i]) }

// var obj = {};

// for(var i =0; i < songs.length; i ++){ obj[songs[i].year]={}}

// obj

// for(var i =0; i < songs.length; i ++){ obj[songs[i].year] = []}


// UNDEFINED IS USED INCORRECTLY BELOW, BUT IDEA REMAINS SOLID 
// for(var i =0; i < songs.length; i ++){ 
//  if (obj[songs[i].year] == undefined)
//     { obj[songs[i].year] = [] }
//   }
// }

// for(var i =0; i < songs.length; i ++){ if(obj[songs[i].year] == undefined){ obj[songs[i].year] = []} else {obj[songs[i]].push("hello")}}
//



// var obj = {};
// for (var i =0; i < songs.length; i ++) {
//   if (obj[songs[i].year] == undefined) {
//     obj[songs[i].year] = {};
//   }
// }


// Done after Phillips help. This works so far. This is how I can add object inside of objects.
//
//
// 
// obj = {name:"David",age:32}

// obj[obj.birthday = "october"]

// obj[obj.height = {}]

// obj[obj.height = { "feet":6,"inches":1}]

// obj.height

// obj.height.feet

