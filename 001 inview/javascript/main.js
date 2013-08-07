$(document).ready(function(){
  // SAMPLE JQUERY BELOW
  // ------------------------
  // $("p").click(function(){
  //   $(this).hide();
  // });
});

$(window).scroll(function(){
  $('#target').inviewport({
    threshold: 10, 
    className: 'myClass'
  })
});