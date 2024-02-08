$(function () {
  $("#slide").slidesjs({
    width: 940,
    height: 257,
    navigation: {
      effect: "fade",
    },
    play: {
      auto: true,
      effect: "fade",
    },
    pagination: {
      effect: "fade",
    },
    effect: {
      fade: {
        speed: 800,
      },
    },
  });
});

$(document).ready(function () {
  $("#slideVideo").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 4,
    nav: true,
    navText: [
      "<i class='owl-sld-arrow-left2'></i>",
      "<i class='owl-sld-arrow-right2'></i>",
    ],
  });
});

$(document).ready(function () {
  $("#slidePhoto").owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    navText: [
      "<i class='owl-sld-arrow-left3'></i>",
      "<i class='owl-sld-arrow-right3'></i>",
    ],
  });
});

$(document).ready(function () {
  $("#slide2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 4,
    nav: true,
    navText: [
      "<i class='owl-sld-arrow-left'></i>",
      "<i class='owl-sld-arrow-right'></i>",
    ],
  });
  const activeBookAddClass = () => {
    $(".activeBook").removeClass("activeBook");
    console.log($("#books-carousel .owl-item.active"));
    console.log("changess");
    $("#books-carousel .owl-item.active").eq(3).addClass("activeBook");
  };
  $("#books-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 5,
    onChanged: activeBookAddClass,
    nav: true,
    navText: [
      "<i class='owl-sld-arrow-left'></i>",
      "<i class='owl-sld-arrow-right'></i>",
    ],
  });
  $(".activeBook").removeClass("activeBook");
  $("#books-carousel .owl-item.active").eq(2).addClass("activeBook");
});

$(function () {
  $("#slide3").slidesjs({
    width: 940,
    height: 550,
    navigation: {
      effect: "slide",
    },
    play: {
      auto: true,
      effect: "slide",
    },
    pagination: {
      effect: "slide",
      active: false,
    },
    effect: {
      fade: {
        speed: 500,
      },
    },
  });
});

jQuery(document).ready(function ($) {
  var tickerSpeed = $(".news-ticker").attr("data-speed");

  $(".news-ticker ul li").hide();
  $(".news-ticker ul li:first").show();

  var currentSlide = 0;
  var slideCount = $(".news-ticker li").length - 1;

  var startTicker = setInterval(function () {
    $(".news-ticker ul li").eq(currentSlide).fadeOut(500);

    if (currentSlide < slideCount) {
      currentSlide += 1;
    } else {
      currentSlide = 0;
    }

    $(".news-ticker ul li").eq(currentSlide).fadeIn(500);
  }, tickerSpeed);

  $(".close-ticker").on("click", function () {
    clearInterval(startTicker);
    $(".news-ticker").fadeOut(500, function () {
      $(this).remove();
    });
  });
});

$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
  });

  $(".fancybox-media").fancybox({
    openEffect: "none",
    closeEffect: "none",
    helpers: {
      media: {},
    },
  });
});

$(document).ready(function () {
  $(".fancyVideo").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: "70%",
    height: "70%",
    autoSize: false,
    closeClick: false,
    openEffect: "elastic",
    closeEffect: "none",
    beforeLoad: function () {
      var url = $(this.element).attr("href");
      url = url.replace(new RegExp("watch\\?v=", "i"), "v/");
      url += "?fs=1&autoplay=1";
      this.href = url;
    },
  });
});
