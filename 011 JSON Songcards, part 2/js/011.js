


$.getJSON('data.json', function(json) {

  // ===============================================
  // Count the # of items in the JSON
  // ===============================================

        var size = 0;
        $.each(json, function(i) {
          size++;
        });

  // ===============================================
  // Show a Song
  // ===============================================

        function updateCard(){
          var randEntry = Math.floor(Math.random()*size+1);
          var randomSong = json[randEntry-1];
          $('#title').html(randomSong.song_title);
          $('#artist').html(randomSong.song_artist_name);
          $('#song_link').attr('href',randomSong.song_url);
          $('#img').attr('src',randomSong.song_artist_img);
        }

  // ===============================================
  // ON PAGE LOAD: Fade card in + show random song title
  // ===============================================

        updateCard();
        $('#songcard').fadeIn(400);

  // ===============================================
  // ON CLICK: Show new song
  // ===============================================

        $('#show_diff').click(function(){
          $('.fdr').fadeOut(200, function() {
            updateCard();
          });
          $('.fdr').fadeIn(200);
          return false;
        });

});