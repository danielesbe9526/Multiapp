$(".two").click( function(){
  $(".two").toggleClass("flip2 flipShadow");               $(".three").toggleClass("flipShadowRev");
  
  setTimeout(function(){
    $(".two").fadeOut(200, function() {
        $(this).removeClass("flipShadow");
      });
     $(".three").fadeOut(100, function() {
        $(this).removeClass("flipShadowRev");
      });
  }, 150);
});

$(".one").click( function(){
    $(".one").toggleClass("flip1 flipShadow");               $(".two").toggleClass("flipShadowRev");
    

  setTimeout(function(){
    $(".one").fadeOut(200, function() {
        $(this).removeClass("flipShadow");
      });
     $(".two").fadeOut(100, function() {
        $(this).removeClass("flipShadowRev");
      });
  }, 150);
})// JavaScript Document