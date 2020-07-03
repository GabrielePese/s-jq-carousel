$(document).ready(function(){

  $(".next").click (function (){
    if ($(".slider-wrapper img").hasClass("active") == true) {
      $(".slider-wrapper img").removeClass ("active") && $(".slider-wrapper img").next().addClass("active");

  }

  else {
    $(this).addClass("active")

  }


});
});
