// FastClick! https://github.com/ftlabs/fastclick
$(function() {
    FastClick.attach(document.body);
});

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
            songsByTitle = {},
            songsByArtist = {},
            songsByYear = {},
            music = { "byYear": [], "byTitle": [], "byArtist": [] };

        // The funciton that processes all the data
        var processData = function(data){

          // ===============================================
          // Pre-process all the data into groupings
          // ===============================================

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
                // Create the finalized groups in Mustache-friendly format
                // ===============================================

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

                // ===============================================
                // Sort the finalized groupings...
                // ===============================================

                      // Sort the groupings:                       
                      music.byYear.sort(sort_by('year', false)); // by year (newest to oldest)
                      // by artist (# to A to Z)
                      music.byArtist.sort(sort_by('artistKey', true));
                      for(key in music.byArtist){
                        music.byArtist[key].songs.sort(sort_by('artist', true));
                      }
                      // by title (# to A to Z)
                      music.byTitle.sort(sort_by('titleKey', true));

                // ===============================================
                // Send the final groups to Mustache / HTML
                // ===============================================

                      // Functions for grouping
                      var template;
                      function uberGroup(templateName,objName){
                        template = $(templateName).html(); // grab the Mustache template
                        $('#target').html( Mustache.to_html(template,objName) ); // write the template content onto the page
                      }

                      // On page load, show by default grouping
                      $(document).ready(function(){
                        uberGroup('#sortByTitle',music);
                      });

                // ===============================================
                // Click events
                // ===============================================

                      // If you click on any grouping control
                      $('.sort_ui a').click(function(){
                        $('.sort_ui a').removeClass('srt_active');
                        $(this).addClass('srt_active');
                        return false;
                      });

                      // Click on YEAR grouping...
                      $('.srt_byYear').click(function(){
                        uberGroup('#sortByYear',music); });

                      // Click on TITLE grouping...
                      $('.srt_byTitle').click(function(){
                        uberGroup('#sortByTitle',music); });

                      // Click on ARTIST grouping...
                      $('.srt_byArtist').click(function(){
                        uberGroup('#sortByArtist',music); });

        };

// ===============================================
// Load the data + run data processing (above)
// ===============================================

        $.ajax({
          url: 'data.json',
          success: processData
        });