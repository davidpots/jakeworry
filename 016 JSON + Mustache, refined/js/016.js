// The JS Magic (process the data)

        var processData = function(myJson){

          // grab the template
          var template = $('#song_template').html();

          // write to the page
          $('#target').append( Mustache.to_html(template,myJson) );

        };

// Load the data, then queue the magic processing

        $.ajax({
          url: 'data.json',
          success: processData
        });