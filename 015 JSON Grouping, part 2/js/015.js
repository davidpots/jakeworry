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

// ===============================================
// Process the JSON data
// ===============================================
  
        // Variables I may want to access from terminal
        var myJson = {},
            music = { "byYear": [] },
            groupKeys = [];

        // The funciton that processes all the data
        var processData = function(data){

                // so I can reference the JSON data via terminal (via 'myJson')
                myJson = data;

                // Get a simple array of all unique key instances the array will be grouped by
                for (var i = 0; i < data.songs.length; i++) { 
                  if (!lookup(groupKeys,data.songs[i].year)) {
                    groupKeys.push(data.songs[i].year);
                    music.byYear.push({"year":data.songs[i].year,"songs":[]});
                  }
                } 

                // Go through the known groups (e.g., years), then go through all of data.songs and add if a match
                for (i = 0; i < music.byYear.length; i++) {
                  for (var x = 0; x < data.songs.length; x++) {
                    if (data.songs[x].year === music.byYear[i].year) {
                      music.byYear[i].songs.push({"title":data.songs[x].title,"artist":data.songs[x].artist,"web_url":data.songs[x].web_url});
                    }
                  }
                }

                music.byYear.sort(sort_by('year', false));

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

                      // On page load, show by default sort
                      $(document).ready(function(){
                        sortDefault();
                      });

                      // If you click on the sort control
                      $('.sorter').click(function(){
                        $('.sorter').removeClass('srt_active');
                        $(this).addClass('srt_active');
                        if ($(this).hasClass('srt_default')) {
                          sortDefault();
                        } else {
                          sortByYear();
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