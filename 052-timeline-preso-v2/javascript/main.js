$(document).ready(function(){

      $('.controls').fadeIn('slow');

      $(".button-start").click(function(){
        $('.timeline li.show-on-load span').show();

          $("ul").animate({left: '-2600px'}, 20800, "linear");
          $('.button-start').hide();
          $('.button-reset').show();

          return false;
      });
      var items = [];


      $('li').each(function(i,obj){
        items.push(obj)
      })

      setInterval(function(){
        $(items).each(function(i,obj){
          if ( $(obj).offset().left < 245 ) {
            $(obj).addClass('preactive').find('span').fadeIn();
          }
          if ( $(obj).offset().left < 110 ) { // "100" shoudl equal the distnace of the today line from the left edge
            $(obj).addClass('active');
          }
        });
      }, 50);



});
