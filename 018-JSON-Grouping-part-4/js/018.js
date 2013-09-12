// ===============================================
// Functions
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
        var songs = {},
            songs2 = {},
            songsByTitle = {},
            songsByArtist = {},
            songsByYear = {},
            music = { "byYear": [], "byTitle": [], "byArtist": [] };

        // The funciton that processes all the data
        var processData = function(data){

                songs = data['songs'];

                var i, len = songs.length, song, year;
                for(i = 0; i < len; i++) {

                  song = songs[i];

                  year = song["year"];
                  songsByYear[year] = songsByYear[year] || [];
                  songsByYear[year].push(song);

                  titleKey = charProcess(song["title"]);
                  songsByTitle[titleKey] = songsByTitle[titleKey] || [];
                  songsByTitle[titleKey].push(song);

                  artistKey = charProcess(song["artist"]);
                  songsByArtist[artistKey] = songsByArtist[artistKey] || [];
                  songsByArtist[artistKey].push(song);

                }

                // ===============================================
                // Sort and Click Event Mgmt
                // ===============================================

                      // Preps the default (flat) song listing
                      m_songs = { "songs": songs };

                      // Preps the master array that feeds into mustache
                      var key;
                      for(key in songsByYear){
                        music.byYear.push({"year":key,"songs":songsByYear[key]});
                      }
                      for(key in songsByTitle){
                        music.byTitle.push({"titleKey":key,"songs":songsByTitle[key]});
                      }
                      for(key in songsByArtist){
                        music.byArtist.push({"artistKey":key,"songs":songsByArtist[key]});
                      }

                      // Functions for sorting
                      function sortDefault(){
                        var template = $('#song_template').html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,m_songs) ); // write the template content onto the page
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