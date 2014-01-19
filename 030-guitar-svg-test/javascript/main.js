var toReplace,
    replacement = "";

$(document).ready(function(){
  $('.dot').html(dot);
  toReplace = $('.replaceMe').html();
  toReplace = toReplace.split('');

  $.each( toReplace, function(i,el) {
    if (el == "o") {
      replacement += "<div class='dot dot-full'>"+dot+"</div>";
    } else if (el == "^") {
      replacement += "<div class='dot dot-full'>"+string_o+"</div>";
    } else if (el == "x") {
      replacement += "<div class='dot dot-full'>"+string_x+"</div>";
    } else if ((el == "|") || (el == " ")) {
      replacement += "<div class='dot dot-empty'></div>";
    } 
  });

  // $('#fretboard').append(fretboard);
  $('#fretboard').append(replacement);

});