$(document).ready(function () {
  $(".testimonials__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    dots: true,
    nextArrow: `<button class="testimonials__slider-next">
    <img src="img/testimonials/right-arrow.svg" alt="next" />
    </button>`,
    prevArrow: `<button class="testimonials__slider-prev">
    <img src="img/testimonials/right-arrow.svg" alt="prev" />
    </button>`,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          variableWidth: true,
        },
      },
      {
        breakpoint: 975,
        settings: {
          variableWidth: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          variableWidth: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//btns
$(document).ready(function () {
  $(".header__menu").click(function (event) {
    $(".navbar, .header__logo, .header__menu").toggleClass("active");

    //logo toggle
    if ($(".header__logo").text() === "Siphome Menu") {
      $(".header__logo")
        .empty()
        .append(
          '<img class="header__image" src="img/logo.svg" alt="logo" />Siphome'
        );
    } else {
      $(".header__logo").text("Siphome Menu");
    }

    $(".header__menu").text() === "Menu"
      ? $(".header__menu").text("Close")
      : $(".header__menu").text("Menu");
  });
});

$(window).scroll(function () {
  let sticky = $(".header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

const navLink = document.querySelectorAll(".navbar__link");

function linkAction() {
  const navMenu = document.getElementById("navbar"),
    MenuBtn = document.getElementById("header__menu"),
    logo = document.getElementById("header__logo");

  navMenu.classList.remove("active");
  MenuBtn.classList.remove("active");

  logo.classList.remove("active");
  logo.innerHTML =
    '<img class="header__image" src="img/logo.svg" alt="logo" />Siphome';

  $(".header__menu").text() === "Close"
    ? $(".header__menu").text("Menu")
    : $(".header__menu").text("Close");
}
navLink.forEach((element) => element.addEventListener("click", linkAction));
