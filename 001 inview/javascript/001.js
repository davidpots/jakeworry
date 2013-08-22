$(window).scroll(function(){
  $('#target').inviewport({
    threshold: 100, 
    className: 'visible'
  })
});