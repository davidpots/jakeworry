var data, size = 0;

  // ===============================================
  // Fetch the data
  // ===============================================

      $.ajax({
        async: false,
        url: 'data.json',
        success: function(myJson) {
          data = myJson;
        }
      });


// core template of the HTML we'll write into  
template = "\
<ul class='songlist'>\
  {{#songs}}\
  <li>\
    <a href='#''>\
      <h2>{{song_title}}</h2>\
      <p>{{song_artist_name}}</p>\
    </a>\
  </li>\
  {{/songs}}\
</ul>\
";

// the HTML that gets spit out
html = Mustache.to_html(template, data);  
  
// put that HTML into the DOM
document.getElementById('target').innerHTML = html;

// ------------------

// To do:
// 1. count the songs
// 2. randomly select a song
// 3. how to sort them by name || artist || year?
// 4. how to randomly sort them?