$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/arrow/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/arrow/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              }
        ]
    });
});