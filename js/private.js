// $(document).ready(function() {
//     if ($('.back-top').length) {
//         var scrollTrigger = 300,
//             backToTop = function () {
//                 var scrollTop = $(window).scrollTop();
//                 if (scrollTop > scrollTrigger) {
//                     $('.back-top').addClass('show');

//                 } else {
//                     $('.back-top').removeClass('show');
//                 }
//             };
//         backToTop();
//         $(window).on('scroll', function () {
//             backToTop();
//         });

//         $('.back-top').on('click', function (e) {
//             e.preventDefault();
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 700);
//         });
//     }
// })

// $(document).ready(function(){
//    $(window).bind('scroll', function() {
//    var navHeight = $( window ).height() - 70;
//          if ($(window).scrollTop() > 1) {
//              $('.header-menu, main').addClass('fix-menu');
//          }
//          else {
//              $('.header-menu, main').removeClass('fix-menu');
//          }
//     });
// }); 

$('.slide-event').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><img src="images/btn-slide.svg" class="img-fluid" alt=""></button>',
    nextArrow: '<button class="next"><img src="images/btn-slide.svg" class="img-fluid" alt=""></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 3, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1, 
            }
        },
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1, 
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, 
            }
        }
    ]
}); 

$('.slide-thumb').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 3.5,
    slidesToScroll: 2, 
    infinite: false,
    centerMode: true,
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
}); 


// new WOW().init(); 


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});