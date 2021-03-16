$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 300){
      $('.scroll-up-btn').addClass('show');
    }
    else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // toggle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation
  let typed = new Typed(".typing", {
    strings: ["Beginning Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
  //owl-carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // scroll smooth
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (e) {
      var data_id = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(data_id).offset().top,
        },
        "500"
      );
    });
    $('.scroll-up-btn').click(function () { 
      $('html').animate({scrollTop: 0}); 
    });
});
