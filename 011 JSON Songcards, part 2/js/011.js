function AnimateRotate(d){
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx){
            $(".refresh_wrap a img").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

$('.refresh_wrap a img').click(function(){
  AnimateRotate(180);  
});

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
          $('#song').html(randomSong.song_title);
          $('#artist').html(randomSong.song_artist_name);
          $('#year').html(randomSong.song_year);
          $('.song_link').attr('href',randomSong.song_url);
          $('.img').attr('src',randomSong.song_artist_img);
        }

  // ===============================================
  // ON PAGE LOAD: Fade card in + show random song title
  // ===============================================

        updateCard();
        $('#card2 .fdr').fadeIn(400);

  // ===============================================
  // ON CLICK: Show new song
  // ===============================================

        $('#refresh').click(function(){
          $('.fdr').fadeOut(200, function() {
            updateCard();
          });
          $('.fdr').fadeIn(200);
          return false;
        });

});