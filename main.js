$(document).ready(function(){

  $(".next").click (function (){

    var imgActive = $(".slider-wrapper img.active")
      imgActive.removeClass ("active");


      if (imgActive.hasClass("last") == true) {
        $(".slider-wrapper img.first")  .addClass("active");
      }
    else {
        imgActive.next().addClass("active");
    }

});
$(".prev").click (function (){

  var imgActive = $(".slider-wrapper img.active")
    imgActive.removeClass ("active");


    if (imgActive.hasClass("first") == true) {
      $(".slider-wrapper img.last")  .addClass("active");
    }
  else {
      imgActive.prev().addClass("active");
  }

});
});
