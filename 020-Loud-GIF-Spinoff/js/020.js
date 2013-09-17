// YouTube URL Manipulation

      // Take a normal YouTube URL, get the special ID...
      function getYouTubeCode(url) {
        return url.split('?v=')[1];
      }

      // Insert the YouTube ID into the embed URL
      function makeEmbeddable(code) {
        return "//www.youtube.com/embed/"+code;
      }

// Read URL params

      // v1
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

      // v2
      // via LoudGIF http://loudgif.com/
      function getParam(name) {
          return decodeURI(
              (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
          );
      }

      // v3
      // replaces each "+" with human-readable spaces (via http://stackoverflow.com/a/4458580 )
      function presto(str) {
        return decodeURIComponent((str+'').replace(/\+/g, '%20'));
      }

      // v4
      // written by me, quite newbish but works for prototype... need to understand the ins+outs better
      function tidyParams(str) {
        // str = str.replace('%2C',',');
        // str = str.replace('%20',' ');
        str = str.replace(/\+/g,' ');
        return str;
      }


// Turn Params into vars

      var combined;

      if (urlVars.paradeTitle != undefined) {
        var str = tidyParams(urlVars.paradeTitle);
        $('#chyron h1').text(str);
        combined = str;
      }

      if (urlVars.paradeGifUrl != undefined) {
        var strUrl = urlVars.paradeGifUrl;
        var strCss = "background-image: url("+strUrl+")";
        $('#gif').attr('style',strCss);
        combined += urlVars.paradeGifUrl;
      }

      if (urlVars.paradeYoutubeUrl != undefined) {
        var str = urlVars.paradeYoutubeUrl;
        str = getYouTubeCode(str);
        str = makeEmbeddable(str);
        str = "https:" + str + "?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&start=0&origin="+location.hostname;
        $('#player').attr('src',str)
        combined += urlVars.paradeYoutubeUrl;
      }

      var gifArr = urlVars.secret.split(',');

// Repopulate the text inputs with existing values on each load

      $('input[name="paradeTitle"]').attr('value',tidyParams(urlVars.paradeTitle));
      $('input[name="paradeGifUrl"]').attr('value',urlVars.paradeGifUrl);
      $('input[name="paradeYoutubeUrl"]').attr('value',urlVars.paradeYoutubeUrl);
      $('input[name="gif1"]').attr('value',urlVars.gif1);
      $('input[name="gif2"]').attr('value',urlVars.gif2);
      $('input[name="gif3"]').attr('value',urlVars.gif3);

// Infinite Recursion
      
      // Cycle through background-color of #belowfold
      // via http://stackoverflow.com/a/6051567 -- but get rid of the animate part (which needs jQuery UI)

      var arr = ["#000", "#111", "#222", "#111"];
      (function recurse(counter) {
          var color = arr[counter];
          $('#belowfold').css('backgroundColor',color);
          delete arr[counter];
          arr.push(color);
          setTimeout(function() {
              recurse(counter + 1);
          }, 400);
      })(0);

// String multiple form fields together

      // via http://stackoverflow.com/a/13830609
      function check(){
          $('#newParade-form input.combine').each(function(id,elem){
              b = $("#hiddenField").val();
              if(b.length > 0){
                  $("#hiddenField").val( b + ',' + $(this).val() );
              } else {
                  $("#hiddenField").val( $(this).val() );
              }
          });
          $("#newParade-form").submit();
          return false;
      }