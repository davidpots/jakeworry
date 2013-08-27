// Variable preparation station
var $lines = $('span'), i, len = $lines.length;

// This function resizes all the lines
function resizeLines(){
  for(i = 0; i < len; i++) {
    
    // Loop item
    var $line = $($lines[i]);

    // Sets the width of each line
    var baseWidth = 10,
        randomRange = 90,
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

  // This changes the text of the H1 after it has faded out... then fades it back in
  $.when($('.song h1').fadeOut(200)).done(function(){
    $('.song h1').html("Pinball Wizard").fadeIn(200);
  });
  return false;
});