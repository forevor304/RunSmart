$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/slider/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/slider/chevron-right-solid.png" ></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                  dotsClass:'slick-dots'
                }
            }
        ]
    });
  });