function prevFrame() {
  if ( $('ul.lemming > li.latest').has('ul.rhino').length ) {
    if ( $('ul.lemming > li.latest ul.rhino > li:first-child').hasClass('active') ) {

      if ( $('ul.lemming > li:first-child').hasClass('latest') ) {

      } else {
        $('ul.lemming > li.latest').removeClass('latest').removeClass('active').prev('li').addClass('latest').addClass('active');
      }

    } else {
      $('ul.lemming > li.latest ul.rhino > li.active').removeClass('active').prev('li').addClass('active');
    }
  } else {

    if ( $('ul.lemming > li:first-child').hasClass('latest') ) {

    } else {
      $('ul.lemming > li.latest').removeClass('latest').removeClass('active').prev('li').addClass('latest').addClass('active');
    }

  }
}

function nextFrame() {
  if ( $('ul.lemming > li.latest').has('ul.rhino').length ) {
    if ( $('ul.lemming > li.latest ul.rhino > li:last-child').hasClass('active') ) {

      if ( $('ul.lemming > li:last-child').hasClass('latest') ) {

      } else {
        $('ul.lemming > li.latest').removeClass('latest').next('li').addClass('latest').addClass('active');
      }


    } else {
      $('ul.lemming > li.latest ul.rhino > li.active').removeClass('active').next('li').addClass('active');
    }
  } else {

    if ( $('ul.lemming > li:last-child').hasClass('latest') ) {

    } else {
      $('ul.lemming > li.latest').removeClass('latest').next('li').addClass('latest').addClass('active');
    }


  }
}


$(document).ready(function(){

  // Prep the lists
  $('ul.lemming li:first-child').addClass('active').addClass('latest');
  // $('ul.rhino li:first-child').addClass('active').addClass('latest');








  $(document).keydown(function(e) {
      switch(e.which) {

          case 37: // left
            prevFrame();
          break;

          case 39: // right
            nextFrame();
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });





});

  //
  // $('ul.lemming li:first-child').addClass('active');
  //
  // $('ul.rhino:first-child').addClass('active');
  // $('ul.rhino li:first-child').addClass('active');
  //
  // $('body').click(function(){
  //
  //   latestLemming = $('.lemming > li.active:last');
  //   // latestRhino = $('ul.rhino'
  //
  //   if ( $(latestLemming).has('ul.rhino').length ) {
  //     /* current .lemming li.active has a rhino, work down the rhino */
  //
  //     // $(latestLemming).find('ul.rhino').addClass('active');
  //
  //     $('ul.rhino > li.active').next('li').addClass('preactive');
  //     $('ul.rhino > li.active').removeClass('active');
  //     $('ul.rhino > li.preactive').addClass('active');
  //   } else {
  //     /* no nested rhino; keep working down the lemming */
  //     $('ul.lemming > li.active').next('li').addClass('active');
  //   }

//
//
//   });
//
// });
