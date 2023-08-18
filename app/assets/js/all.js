//navbar
$(function () {
  $(".navbar-toggler").on("click", function () {
    $(this).find(".fa-solid").toggleClass("d-none")
  });
})

$(function () {
  $(".searchBtn").on("click", function () {
    $(".navbar-show").toggleClass("d-none")
  });
})

$(function () {
  $(".navbar-return").on("click", function () {
    $(".navbar-show").toggleClass("d-none")
  });
})

const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    spaceBetween: 0,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    
});

//masonry
$('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
  columnWidth: '.grid-sizer',
  percentPosition: true
});