$(document).ready(function(){


      $("body").click(function(){
          $("ul").animate({left: '-2600px'}, 20800, "linear");
      });


      var items = [];


      $('li').each(function(i,obj){
        items.push(obj)
      })

      setInterval(function(){
        $(items).each(function(i,obj){
          if ( $(obj).offset().left < 243 ) {
            $(obj).addClass('preactive');
          }
          if ( $(obj).offset().left < 50 ) {
            $(obj).addClass('active');
          }
        });
      }, 50);



});
