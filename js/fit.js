$(document).ready(function () {
  $("#img-logo1").insert("fadeIn", "0", "1");
  $("#img-logo2").insert("flipInX", "1", "1");
  $("#img-logo3").insert("drawLine", "2", "6");
  $("#img-logo4").insert("rotateInDownLeft", "0", "2");
  hZoom = $(window).height() / $("body").outerHeight();
  wZoom = $(window).width() / $("body").outerWidth();
  // $(".screen").text(window.outerHeight);
  if (window.matchMedia("(min-width: 992px)").matches) {
    $("body").css("transform", "scale(" + wZoom + "," + hZoom + ")");
    $("body").css("-ms-transform", "scale(" + wZoom + "," + hZoom + ")");
    $("body").css("-webkit-transform", "scale(" + wZoom + "," + hZoom + ")");
  }
});
$(window).on("resize", function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    hZoom = $(window).height() / $("body").outerHeight();
    wZoom = $(window).width() / $("body").outerWidth();
    $("body").css("transform", "scale(" + wZoom + "," + hZoom + ")");
    $("body").css("-ms-transform", "scale(" + wZoom + "," + hZoom + ")");
    $("body").css("-webkit-transform", "scale(" + wZoom + "," + hZoom + ")");
  }
});
// 360 x 707
