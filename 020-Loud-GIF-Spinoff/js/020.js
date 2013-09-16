// Take a normal YouTube URL, get the special ID...
function getYouTubeCode(url) {
  return url.split('?v=')[1];
}

// Insert the YouTube ID into the embed URL
function makeEmbeddable(code) {
  return "//www.youtube.com/embed/"+code;
}

// Prototype: if user clicks on YouTube link, change the background video

    $('.yt-link').click(function(){ 
      var str = $(this).attr('href');
      str = getYouTubeCode(str);
      str = makeEmbeddable(str);
      str = "https:" + str + "?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&start=0&origin="+location.hostname;
      $('#player').attr('src',str)
      return false;
    });

// Read URL params, v1
// via http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
    
    function getUrlVars() {
      // look for comment by SpaceLobster to make the orig post's code return an object instead of array
      var params = {}, d = function (s) { return s ? decodeURIComponent(s.replace(/\+/, " ")) : null; }
      if(window.location.search) $.each(window.location.search.substring(1).split('&'), function(i, v) {
      var pair = v.split('=');
      params[d(pair[0])] = d(pair[1]);
      });
      return params;
    }
    var urlVars = getUrlVars();

// Read URL params, v2
// via LoudGIF http://loudgif.com/
    function getParam(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
        );
    }

// Read URL params, v3
// replaces each "+"" with human-readable spaces
// via http://stackoverflow.com/a/4458580
    function presto(str) {
      return decodeURIComponent((str+'').replace(/\+/g, '%20'));
    }


// Turn Params into vars

    // var gif_url;

    // $("#newParade-form").submit(function(e){
    //   gif_url = getParam(gif_url);
    //   if (gif_url != '') {
    //     alert("This URL of the gif is " + getParam(gif_url));
    //   }
    // });

    // if (getParam('gif_url') == "null") {
    //   alert("it is null!");
    // }

    if (urlVars.paradeTitle != undefined) {
      var str = presto(urlVars.paradeTitle);
      $('#chyron h1').text(str);
      $('input[name="paradeTitle"]').attr('value',str);
    }

    if (urlVars.paradeGifUrl != undefined) {
      var strUrl = presto(urlVars.paradeGifUrl);
      var strCss = "background-image: url("+strUrl+")";
      $('#gif').attr('style',strCss);
      $('input[name="paradeGifUrl"]').attr('value',strUrl);
    }

    // var paradeTitle = getParam('paradeTitle');
    // if (paradeTitle == "null") {
    //   //
    // } else {
    //   $('#chyron h1').text(paradeTitle);
    // }


    // var paradeGifUrl = getParam('paradeGifUrl');
    // if (paradeGifUrl == "null") {
    //   //
    // } else {
    //   str = "background-image: url("+paradeGifUrl+")";
    //   $('#gif').attr('style',str);
    // }