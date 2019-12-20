var winwidth = $(window).width();

if (winwidth < 750) {
  $(".bgslider").each(function(a, b) {
    var data_src = $(this).data("mobile");
    $(this).removeAttr("style").css("background-image", "url(" + data_src + ")");
  });
}

if (749 < winwidth && winwidth < 1185) {
  $(".bgslider").each(function(a, b) {
    var data_src = $(this).data("tablet");
    $(this).removeAttr("style").css("background-image", "url(" + data_src + ")");
  })
}

if (1185 <= winwidth) {
  $(".bgslider").each(function(a, b) {
    var data_src = $(this).data("desctop");
    $(this).removeAttr("style").css("background-image", "url(" + data_src + ")");
  });
}

var timerId, i, slide = 1;
var all_slide = $(".slider_main_block>div");
var navi = document.createElement("div");

for (navi.className = "navi", $(".slider_main_block").append(navi), i = 0; i < all_slide.length; i++) {
  var dots = document.createElement("div");
  dots.className = "dots_" + (i + 1),
    $(".navi").append(dots)
}

var all_dots = $(".navi>div");

$(".slider_main_block").removeClass("start");
$(".slider_main_block>div:first-child").addClass("is-active");
$(".navi>div:first-child").addClass("is-active");

Animated();

setTimeout(function() {
  $(".slider_main_block").removeAttr("style").css("background-color", "#aaa")
}, 3e3);

$(document).on("click", ".slider_main_block>div.is-active", function() {
  $(this).parent().hasClass("is-stoped") ? (Animated(), $(this).parent().removeClass("is-stoped")) : ($(this).parent().addClass("is-stoped"), clearInterval(timerId));
});

$(all_dots).click(function() {
  slide = $(this).index(),
    clearInterval(timerId),
    slide < all_slide.length && (slide += 1,
      $(all_slide).removeClass("is-active"),
      $(all_slide[slide - 1]).addClass("is-active"),
      $(all_dots).removeClass("is-active"),
      $(all_dots[slide - 1]).addClass("is-active")),
    slide == all_slide.length && ($(all_slide).removeClass("is-active"),
      $(all_slide[slide - 1]).addClass("is-active"),
      $(all_dots).removeClass("is-active"),
      $(all_dots[slide - 1]).addClass("is-active"),
      slide = 0),
    $(this).parent().parent().addClass("is-stoped")
});

function Animated() {
  timerId = setInterval(function() {
    slide < all_slide.length && (slide += 1,
        $(all_slide).removeClass("is-active"),
        $(all_slide[slide - 1]).addClass("is-active"),
        $(all_dots).removeClass("is-active"),
        $(all_dots[slide - 1]).addClass("is-active")),
      slide == all_slide.length && ($(all_slide).removeClass("is-active"),
        $(all_slide[slide - 1]).addClass("is-active"),
        $(all_dots).removeClass("is-active"),
        $(all_dots[slide - 1]).addClass("is-active"),
        slide = 0)
  }, 5e3);
}

function swipeSlider() {
  clearInterval(timerId),
    slide < all_slide.length && 0 < slide && ($(all_slide).removeClass("is-active"),
      $(all_slide[slide - 1]).addClass("is-active"),
      $(all_dots).removeClass("is-active"),
      $(all_dots[slide - 1]).addClass("is-active")),
    slide >= all_slide.length && ($(all_slide).removeClass("is-active"),
      $(all_slide[slide - 1]).addClass("is-active"),
      $(all_dots).removeClass("is-active"),
      $(all_dots[slide - 1]).addClass("is-active"),
      slide = 0),
    slide < 0 && (slide = all_slide.length,
      $(all_slide).removeClass("is-active"),
      $(all_slide[slide - 1]).addClass("is-active"),
      $(all_dots).removeClass("is-active"),
      $(all_dots[slide - 1]).addClass("is-active")),
    Animated();
}

$(document).ready(function() {
  if (0 < $(".slider_main_block").length) {
    var swipe = $(".slider_main_block")[0];

    setTimeout(function() {
      Hammer(swipe).on("swipeleft", function() {
        slide += 1,
          swipeSlider()
      });

      Hammer(swipe).on("swiperight", function() {
        slide -= 1,
          swipeSlider()
      });
    }, 5e3)
  }
});
