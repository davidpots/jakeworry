$(document).ready(function(){
  // Loop through each <article> and add the height as inline CSS
  $('article').each(function(){ $(this).css('height', $(this).outerHeight()); });
});

// Prime the loop that checks the position of each article
var $articles = $('article'), i, len = $articles.length;

// On scroll, check the position of each article
$(window).scroll(function(){  
  for(i = 0; i < len; i++) {
    var $article = $($articles[i]);
    // Calculate the distance of an element from the top of the browser window
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $article.offset().top,
        distance      = (elementOffset - scrollTop);
    // Calculate the height of desired element (so you can determine its bottom)
    var itemHeight     = $article.height();
    // Calculate the distance of bottom of element to top of window
    var bottomDistance = (distance + itemHeight);

    // If the element is below the window, remove class "fixed"
    if (distance > 0) { $article.removeClass('fixed'); }
    // If the element is below the top of the window, add class "fixed"
    if (distance < 0) { $article.addClass('fixed'); }
    // If the element is WAY below the top of the window, remove class "fixed"
    if (bottomDistance < 0) { $article.removeClass('fixed'); }
  }
});