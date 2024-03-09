
/* Slider One */

const owl = $('.slider-one');
owl.owlCarousel({
    smartSpeed: 450,
    dots: false,
    loop: true,
    margin: 30,
    items: 4,
    responsive:{
      0:{
          items:1,
      },
      760:{
          items:2,
      },
      1090:{
          items:3,
      },
      1700:{
        items:4,
    }
  },
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--right').click(function() {
    owl.trigger('next.owl.carousel');
})

/* Slider Two */

const owl2 = $('.slider-two');
owl2.owlCarousel({
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause: true,
    smartSpeed: 700,
    dots: false,
    loop: true,
    margin: 125,
    responsive:{
      0:{
          items:1,
      },
      1111:{
          items:2,
      }
  },
});

/* Mobile Nav */

const openBtn = document.querySelector('#openMobileNav');
const openMobileNav = document.querySelector('#mobileNav');
const closeMobileNav = document.querySelector('#closeMobileNav');

openBtn.onclick = function () {
    openMobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}

closeMobileNav.onclick = function () {
    openMobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}