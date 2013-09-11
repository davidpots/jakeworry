// To do eventually:
// - combine "f" and "F" into the same thing, for both artist and title
// - combine all numbers into "#" for both artist and title
// - combine all special characters into "#" (?) for both artist and title
// - strip out leading "the" for artist and title -- make sure this doesn't conflict with the special characters

// ===============================================
// Functions
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

        function charProcess(string) {
          var str = string.toUpperCase();
          str = str.replace('THE ', '');
          str = str.replace(' ', '');
          str = str.replace(/[^A-Za-z]/,'#'); // anything EXCEPT normal letters are replaced with '#'
          str = str.charAt(0);
          return str;
        }

// ===============================================
// Process the JSON data
// ===============================================
  
        // Variables I may want to access from terminal
        var myJson = {},
            music = { "byYear": [], "byTitle": [], "byArtist": [] },
            prepByTitle = [],
            prepByArtist = [],
            groupKeys = [];

        // The funciton that processes all the data
        var processData = function(data){

                // so I can reference the JSON data via terminal (via 'myJson')
                myJson = data;

                // =========================================================
                // Prep each group's keys (by artist, by title, by artist)
                // =========================================================

                      // group byArtist Prep: put all unique artist-first-characters into prepByArtist[]
                      for (var i = 0; i < data.songs.length; i++) {
                        if (!lookup(prepByArtist,charProcess(data.songs[i].artist))) {
                          artistKey = charProcess(data.songs[i].artist);                          
                          prepByArtist.push(artistKey);
                          music.byArtist.push({"artistKey":artistKey,"songs":[]});
                        }
                      }
                      prepByArtist.sort();

                      // group byTitle Prep: put all unique title-first-characters into prepByTitle[]
                      for (var i = 0; i < data.songs.length; i++) {
                        if (!lookup(prepByTitle,charProcess(data.songs[i].title))) {
                          titleKey = charProcess(data.songs[i].title);
                          prepByTitle.push(titleKey);
                          music.byTitle.push({"titleKey":titleKey,"songs":[]});
                        }
                      }
                      prepByTitle.sort();

                      // group byYear Prep: put all unique years into groupKeys[]
                      for (var i = 0; i < data.songs.length; i++) { 
                        if (!lookup(groupKeys,data.songs[i].year)) {
                          groupKeys.push(data.songs[i].year);
                          music.byYear.push({"year":data.songs[i].year,"songs":[]});
                        }
                      } 

                // =========================================================
                // Create array of objects for each group
                // =========================================================

                      // Go through the known TITLES, then go through all of data.songs and add if a match
                      for (var i = 0; i < music.byTitle.length; i++) {
                        for (var x = 0; x < data.songs.length; x++) {
                          if (charProcess(data.songs[x].title) === music.byTitle[i].titleKey) {
                            music.byTitle[i].songs.push({"title":data.songs[x].title,"artist":data.songs[x].artist,"web_url":data.songs[x].web_url});
                          }
                        }
                      }

                      // Go through the known ARTISTS, then go through all of data.songs and add if a match
                      for (var i = 0; i < music.byArtist.length; i++) {
                        for (var x = 0; x < data.songs.length; x++) {
                          if (charProcess(data.songs[x].artist) === music.byArtist[i].artistKey) {
                            music.byArtist[i].songs.push({"title":data.songs[x].title,"artist":data.songs[x].artist,"web_url":data.songs[x].web_url});
                          }
                        }
                      }

                      // Go through the known YEARS, then go through all of data.songs and add if a match
                      for (i = 0; i < music.byYear.length; i++) {
                        for (var x = 0; x < data.songs.length; x++) {
                          if (data.songs[x].year === music.byYear[i].year) {
                            music.byYear[i].songs.push({"title":data.songs[x].title,"artist":data.songs[x].artist,"web_url":data.songs[x].web_url});
                          }
                        }
                      }

                      // Sort the groupings:                       
                      music.byYear.sort(sort_by('year', false)); // by year (newest to oldest)
                      // by artist (# to A to Z)
                      music.byArtist.sort(sort_by('artistKey', true));
                      // by title (# to A to Z)
                      music.byTitle.sort(sort_by('titleKey', true));

                // ===============================================
                // Sort and Click Event Mgmt
                // ===============================================

                      // Functions for sorting
                      function sortDefault(){
                        var template = $('#song_template').html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,data) ); // write the template content onto the page
                      }
                      function sortByYear(){
                        var template = $('#byYear_template').html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,music) ); // write the template content onto the page
                      }
                      function sortByTitle(){
                        var template = $('#byTitle_template').html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,music) ); // write the template content onto the page
                      }
                      function sortByArtist(){
                        var template = $('#byArtist_template').html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,music) ); // write the template content onto the page
                      }

                      // On page load, show by default sort
                      $(document).ready(function(){
                        sortByTitle();
                      });

                      // If you click on the sort control
                      $('.sorter').click(function(){
                        $('.sorter').removeClass('srt_active');
                        $(this).addClass('srt_active');
                        if ($(this).hasClass('srt_default')) {
                          sortDefault();
                        } else if ($(this).hasClass('srt_byYear')) {
                          sortByYear();
                        } else if ($(this).hasClass('srt_byArtist')) {
                          sortByArtist();
                        } else if ($(this).hasClass('srt_byTitle')) {
                          sortByTitle();
                        }
                        return false;
                      });

        };

// ===============================================
// Load the data + run data processing (above)
// ===============================================

        $.ajax({
          url: 'data.json',
          success: processData
        });