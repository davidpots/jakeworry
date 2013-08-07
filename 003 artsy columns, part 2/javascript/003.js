function secondaryFixTop() {
  $('.chimp .secondary').css('position','fixed').css('left','20px').css('top', '0px');
}

function secondaryUnFix() {
  $('.chimp .secondary').css('position','absolute').css('left','0px').css('top','0px').css('bottom','auto');
}

function secondaryFixBottom() {
  $('.chimp .secondary').css('position','absolute').css('bottom','0px').css('top','auto').css('left','0px');
}

$(document).ready(function(){

  // Loop through each <article> and add the height as inline CSS
  $('article').each(function(){ 
    var primaryHeight = $(this).find('.primary').height() + 'px';
    var bottomMargin = "80px";
    $(this).css('height', primaryHeight);
    $(this).css('margin-bottom', bottomMargin);
  });

  $('article .primary').each(function(){ 
    $(this).css('position', 'absolute');
  });

  $('article .secondary').each(function(){ 
    $(this).css('position', 'absolute');
  });
      

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
    secondaryUnFix();
  } else {
  
    // If the element is below the top of the window, add class "fixed"
    if (distance < 0) {
      $('body').addClass('fixed');
      secondaryFixTop();
    }

    // This is when the secondary column should become bottom-ized
    if (bottomDistance > ($('.chimp .secondary').height())) {
      secondaryFixTop();
    } else if (bottomDistance < ($('.chimp .secondary').height())) {
      $('body').addClass('bottomized');
      secondaryFixBottom();
    }
    
  
    // If the element is WAY below the top of the window, remove class "fixed"
    if (bottomDistance < 0) {
      $('body').removeClass('fixed');    
      secondaryUnFix();
    }
  }
  



  
  
  // Console debugging
  
      // console.log("Distance from top: "+scrollTop+"    Element Offset: "+elementOffset+"       Distance: "+distance);
      // console.log(bottomDistance);
      console.log(bottomDistance+ " " +$('.chimp .secondary').height());

});