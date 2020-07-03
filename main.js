$(document).ready(function(){

// PARTE KEYBOARD
$(document).keydown(function() {
    var tasto = event.which
    if (tasto == 39) {var imgActive = $(".slider-wrapper img.active")
      imgActive.removeClass ("active");


      if (imgActive.hasClass("last") == true) {
        $(".slider-wrapper img.first")  .addClass("active");
      }
    else {
        imgActive.next().addClass("active");
    }
    var iActive = $(".slider-wrapper i.active")
      iActive.removeClass ("active");


      if (iActive.hasClass("last") == true) {
        $(".slider-wrapper i.first")  .addClass("active");
      }
    else {
        iActive.next().addClass("active");
    }
    }

    // TASTO INDIETRO
    else if (tasto == 37) {
      var imgActive = $(".slider-wrapper img.active")
        imgActive.removeClass ("active");


        if (imgActive.hasClass("first") == true) {
          $(".slider-wrapper img.last")  .addClass("active");
        }
      else {
          imgActive.prev().addClass("active");
      }
      var iActive = $(".slider-wrapper i.active")
        iActive.removeClass ("active");


        if (iActive.hasClass("first") == true) {
          $(".slider-wrapper i.last")  .addClass("active");
        }
      else {
          iActive.prev().addClass("active");
      }
    }

  });

  $(".next").click (function (){

// PARTE PER LE FOTO AVANTI

    var imgActive = $(".slider-wrapper img.active")
      imgActive.removeClass ("active");


      if (imgActive.hasClass("last") == true) {
        $(".slider-wrapper img.first")  .addClass("active");
      }
    else {
        imgActive.next().addClass("active");
    }

 // PARTE PER I PALLINI AVANTI

    var iActive = $(".slider-wrapper i.active")
      iActive.removeClass ("active");


      if (iActive.hasClass("last") == true) {
        $(".slider-wrapper i.first")  .addClass("active");
      }
    else {
        iActive.next().addClass("active");
    }

});
$(".prev").click (function (){

 // PARTE FOTO INDIETRO

  var imgActive = $(".slider-wrapper img.active")
    imgActive.removeClass ("active");


    if (imgActive.hasClass("first") == true) {
      $(".slider-wrapper img.last")  .addClass("active");
    }
  else {
      imgActive.prev().addClass("active");
  }

// PARTE PALLINI INDIETRO

var iActive = $(".slider-wrapper i.active")
  iActive.removeClass ("active");


  if (iActive.hasClass("first") == true) {
    $(".slider-wrapper i.last")  .addClass("active");
  }
else {
    iActive.prev().addClass("active");
}
});
});
