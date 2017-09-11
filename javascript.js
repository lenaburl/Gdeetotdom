$(function FixHeader(){
  var h_mrg = 0;
  var h_hght = $('#top-header').outerHeight();

  var elem = $('#bottom-header');
  var top = $(this).scrollTop();

  if(top > h_hght){
    elem.css('top', h_mrg);
  }

  $(window).scroll(function(){
    top = $(this).scrollTop();

    if (top+h_mrg < h_hght) {
      elem.css('top', (h_hght-top));
    } else {
      elem.css('top', h_mrg);
    }
  });
});

$(document).ready(function() {
  FixHeader();
});
