// Variable preparation station
var $lines = $('span'), i, len = $lines.length;

// This function resizes all the lines
function resizeLines(){
  for(i = 0; i < len; i++) {
    
    // Loop item
    var $line = $($lines[i]);

    // Sets the width of each line
    var baseWidth = 30,
        randomRange = 61,
        numRand = baseWidth + Math.floor(Math.random()*randomRange)+'%';
    $line.animate({width:numRand});
  }
}

// On page load, resize the lines!
$(document).ready(function(){
  resizeLines();
});

// If a user cliks anywhere, resize the lines!
$('.song').click(function(){
  resizeLines();
  $('.song').toggleClass('colored');
  return false;
});