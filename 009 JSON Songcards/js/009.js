// Variable preparation station
var $lines = $('#songcard p span'), i, len = $lines.length;

// This function resizes all the lines
function resizeLines(){
  for(i = 0; i < len; i++) {
    
    // Loop item
    var $line = $($lines[i]);

    // Sets the width of each line
    var baseWidth = 50,
        randomRange = 40,
        numRand = baseWidth + Math.floor(Math.random()*randomRange)+'%';
    $line.animate({width:numRand});
  }
}


$.getJSON('data.json', function(json) {

  // ===============================================
  // Count the # of items in the JSON
  // ===============================================

        var size = 0;
        $.each(json.songs, function(i) {
          size++;
        });

  // ===============================================
  // Show a Song
  // ===============================================

        function updateCard(){
          var randEntry = Math.floor(Math.random()*size+1);
          var randomSong = json.songs[randEntry-1].title;
          $('#title').html(randEntry).html(randomSong);
        }

  // ===============================================
  // ON PAGE LOAD: Fade card in + show random song title
  // ===============================================

        updateCard();
        resizeLines();
        $('#songcard').fadeIn(400);

  // ===============================================
  // ON CLICK: Show new song
  // ===============================================

        $('body').click(function(){
          $('.fdr').fadeOut(200, function() {
            updateCard();
          });
          resizeLines();
          $('.fdr').fadeIn(200);
        });

});