// ===============================================
// Setup the HTML Mustache template
// ===============================================

      // This is what we'll eventually dump the content into
      t_default = "\
      <ul class='songlist'>\
        {{#songs}}\
        <li>\
            <p><u>{{title}}</u> by {{artist}} ({{year}})</p>\
        </li>\
        {{/songs}}\
      </ul>\
      ";

      // And we'll put the grouped content into here
      t_byYear = "\
        {{#byYear}}\
        <strong>{{year}}</strong>\
        <ul class='songlist'>\
          {{#songs}}\
          <li>\
              <p><u>{{title}}</u> by {{artist}}</p>\
          </li>\
          {{/songs}}\
        </ul>\
        {{/byYear}}\
      ";

// ===============================================
// The data we're working with
// ===============================================

      var data = { "songs": [
        { "title": "Only Son of the Ladiesman",
          "artist": "Father John Misty",
          "year": 2012 },
        { "title": "Stubborn Love",
          "artist": "The Lumineers",
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
        { "title": "Never Knew Your Name",
          "artist": "Mason Jennings",
          "year": 2008 },
        { "title": "Acid Tongue",
          "artist": "Jenny Lewis",
          "year": 2008 },
        { "title": "Ne Me Quitte Pas",
          "artist": "Regina Spektor",
          "year": 2012 },
        { "title": "Matilda",
          "artist": "Alt-J",
          "year": 2012 },
        { "title": "I Knew You Were Trouble",
          "artist": "Taylor Swift",
          "year": 2012 },
        { "title": "Santeria",
          "artist": "Sublime",
          "year": 1997 }
      ]};

// ===============================================
// Comparison / Lookup Function
// ===============================================

      // Looks up any value (val) in array (arr). Returns TRUE if that val exists in the arr.
      function lookup(arr,val) {
        for(var i = 0, len = arr.length; i < len; i++) {
          if( arr[i] === val) {
            return true;
          }
        }
        return false;
      }

// ===============================================
// The Magic to Sort Songs by Year
// ===============================================

      // Creates an array of ONLY the years that have songs in them
      // NEXT PROJECT: combine this with the next chunk of code
      var years = [];
      for (var i = 0; i < data.songs.length; i++) {
        if (!(lookup(years,data.songs[i].year))) {
          years.push(data.songs[i].year);
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
        for (var i = 0; i < data.songs.length; i++) {
          if (byYear[x].year == data.songs[i].year) {
            byYear[x].songs.push(data.songs[i]);
          }
        }        
      }
      // use JSON.stringify(byYear) to view the goodness

// ===============================================
// Sort function
// ===============================================

      // via http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
      // give either "true" or "false" to the "reverse" parameter to swap asc/desc
      // the "primer" paramater is optional
      var sort_by = function(field, reverse, primer){
         var key = function (x) {return primer ? primer(x[field]) : x[field]};
         return function (a,b) {
             var A = key(a), B = key(b);
             return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
         }
      }

      // Apply a sort
      byYear.sort(sort_by('year', false));

// ===============================================
// Display it to the screen, ya'll
// ===============================================

      html = Mustache.to_html(t_default, data);
      document.getElementById('html_default').innerHTML = html;

      // Puts byYear, which is an array, into an object. Necessary for JSON/Mustache. 
      // NEXT PROJECT: fix this above somewhere.
      byYear = { "byYear": byYear };
      html_byYear = Mustache.to_html(t_byYear, byYear);
      document.getElementById('html_byYear').innerHTML = html_byYear;