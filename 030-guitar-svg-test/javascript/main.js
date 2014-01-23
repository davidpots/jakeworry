
$(document).ready(function(){

  // Read ASCII fretboard text & prep it

          // Read the ASCII fretboard that'll be replaced
          var toReplace = $('.replaceMe').html();
          // Split the ASCII freboard text into an array of individual characters
          toReplace = toReplace.split('');

  // Go through ASCII characters, inject HTML+SVG as needed

          var replacement = "";
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

  // Update the page with the new HTML/SVG markup

          $('#fretboard').append(replacement);

});