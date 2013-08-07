$(document).ready(function(){

  // Loop through each <article> and add the height as inline CSS
  $('article').each(function(){ $(this).css('height', $(this).outerHeight()); });

});







$(window).scroll(function(){

  // Calculate the distance of an element from the top of the browser window
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('article.chimp').offset().top,
      distance      = (elementOffset - scrollTop);

  // Calculate the height of desired element (so you can determine its bottom)
  var itemHeight     = $('.chimp').height();

  // Calculate the distance of bottom of element to top of window
  var bottomDistance = (distance + itemHeight);






  // If the element is below the window, remove class "fixed"
  if (distance > 0) {
    $('body').removeClass('fixed');
  }
  
  // If the element is below the top of the window, add class "fixed"
  if (distance < 0) {
    $('body').addClass('fixed');
  }
  
  // If the element is WAY below the top of the window, remove class "fixed"
  if (bottomDistance < 0) {
    $('body').removeClass('fixed');    
  }
  


  

  
  
  // Console debugging
  
      // console.log("Distance from top: "+scrollTop+"    Element Offset: "+elementOffset+"       Distance: "+distance);
      // console.log(bottomDistance);

});