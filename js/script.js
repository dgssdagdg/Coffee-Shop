document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    if (e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    } else if (!e.target.closest('.menu') && menu.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }

})
const swiper = new Swiper('.customers-sliders', {
    loop: true,
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 35,
    navigation: {
      nextEl: '.customers-button-next',
      prevEl: '.customers-button-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 34
        }
      }
});