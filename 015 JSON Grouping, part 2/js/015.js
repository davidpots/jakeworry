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
// Fetch the data
// ===============================================

      var data;
      $.ajax({
        async: false,
        dataType: "json",
        url: '015.json',
        success: function(myJson) {
          data = myJson;
        }
      });
      // the JSON is now accessible via the variable "data"


// ===============================================
// The Magic
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

      var music = { "byYear": [] }
      // Get a simple arrays of all unique key instances the array will be grouped by
      groupKeys = [];
      for (var i = 0; i < data.songs.length; i++) { 
        if (!lookup(groupKeys,data.songs[i].year)) {
          groupKeys.push(data.songs[i].year);
          music.byYear.push({"year":data.songs[i].year,"songs":[]});
        }
      }

      // Go through the known groups (e.g., years), then go through all of data.songs and add if a match
      for (var i = 0; i < music.byYear.length; i++) {
        for (var x = 0; x < data.songs.length; x++) {
          if (data.songs[x].year == music.byYear[i].year) {
            music.byYear[i].songs.push({"title":data.songs[x].title,"artist":data.songs[x].artist});
          }
        }
      }




      // How to tell if an array item is empty
      // if (typeof music.byYear[3] == "undefined") { alert("it is undefined"); }

      // animals = ["dog", "cat", "eagle", "ferret", "dog"]
      // animals.indexOf("dog") // returns 0
      // animals.indexOf("cat") // returns 1
