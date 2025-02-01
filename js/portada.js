new Swiper('.deslizador-principal', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.navegacion-diapositiva.siguiente',
        prevEl: '.navegacion-diapositiva.anterior',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});