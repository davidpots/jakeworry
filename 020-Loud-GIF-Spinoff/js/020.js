// Take a normal YouTube URL, get the special ID...
function getYouTubeCode(url) {
  return url.split('?v=')[1];
}

// Insert the YouTube ID into the embed URL
function makeEmbeddable(code) {
  return "//www.youtube.com/embed/"+code;
}

$('.yt-link').click(function(){ 
  var str = $(this).attr('href');
  str = getYouTubeCode(str);
  str = makeEmbeddable(str);
  str = "https:" + str + "?autoplay=1&amp;controls=0&amp;modestbranding=1&amp;playlist=s7L2PVdrb_8&amp;showinfo=0&amp;start=0&amp;loop=1&amp;enablejsapi=1"
  // alert(str);

  $('#player').attr('src',str)

  // var iframe = document.getElementById('player');
  // iframe.src = str;

  return false;
});

//{{youTubeVideoId}}

// data = {  
//     videos: [ "The Doors", 
//               "Strange Days", 
//               "Waiting for the Sun", 
//               "The Soft Parade", 
//               "Morrison Hotel", 
//               "LA Woman"
//             ]
// };

// SRC has to be this:
// https://www.youtube.com/embed/{{youTubeVideoId}}?autoplay=1&amp;controls=0&amp;modestbranding=1&amp;playlist=s7L2PVdrb_8&amp;showinfo=0&amp;start=0&amp;loop=1&amp;enablejsapi=1

// var bananaFace = function(data){

//   // grab the template
//   var template = $('#youTubePlayer').html();

//   // write to the page
//   $('#playerWrap').append( Mustache.to_html(template,presto) );

// };