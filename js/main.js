import "./navbar.js"


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800, // Adjust speed for smoother transition
    autoplay: {
        delay: 2000,
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0, // Set rotate to 0 for a smoother effect
        depth: 100, // Increase depth for a smoother effect
        modifier: 1,
        slideShadows: true, // Disable shadows
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
