// $('.navbar-toggler').click(function() {
//   $('.navbar-collapse').addClass('open-nav');
//   $('.navbar-toggler').addClass('open-toggler');
// })
//
// $('.navbar-toggler').click(function() {
//   $('.navbar-collapse').removeClass('open-nav');
//   $('.navbar-toggler').removeClass('open-toggler');
// })

$('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('open-nav');
    $('.navbar-collapse-overlay').fadeToggle();
    $('.navbar-toggler').toggleClass('open');
});

$('.navbar-collapse-overlay').click(function(){
    $('.navbar-collapse').toggleClass('open-nav');
    $('.navbar-collapse-overlay').fadeToggle();
    $('.navbar-toggler').toggleClass('open');
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'gorizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
  },
})
