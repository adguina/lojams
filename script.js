const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visible
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Iniciar Swiper
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".menu-bag .swiper", {
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: ".menu-bag .swiper-button-next",
            prevEl: ".menu-bag .swiper-button-prev",
        },

        pagination: {
            el: ".menu-bag .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });
});
