var fretboardHTML = '<div class="fretboard-wrapper">\
            <div class="fretboard-pillars"></div>\
            <div class="fretboard"></div>\
          </div>';

var thisFretboard;

$(document).ready(function(){

  // For each Fretboard instance...
  $.each( $('.fretboard_instance'), function(i,el) {

    // Insert the HTML foundation
    $(this).append(fretboardHTML);

    // Read the ASCII fretboard that'll be replaced, then split it into an array of characters
    var toReplace = $(el).find('.asciiFret').html();
    toReplace = toReplace.split('');

    // Go through ASCII characters, inject HTML+SVG as needed
    var replacement = "";
    $.each( toReplace, function(i,character) {
      if (character == "o") {
        replacement += "<div class='cell dot'>"+dot+"</div>";
      } else if (character == "(") {
        replacement += "<div class='cell'>"+dotWideLeft+"</div>";
      } else if (character == ")") {
        replacement += "<div class='cell'>"+dotWideRight+"</div>";
      } else if (character == "=") {
        replacement += "<div class='cell'>"+dotWideMiddle+"</div>";
      } else if (character == "^") {
        replacement += "<div class='cell'>"+string_o+"</div>";
      } else if (character == "x") {
        replacement += "<div class='cell'>"+string_x+"</div>";
      } else if ((character == "|") || (character == " ")) {
        replacement += "<div class='cell empty'></div>";
      } 
    });

    // Update the page with the new HTML/SVG markup
    $(el).find('.fretboard').append(fretboardBG);
    $(el).find('.fretboard').append(replacement);

    // Remove the ASCII fretboard
    $(this).find('.asciiFret').hide();
  });
});