const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    effect: "fade",
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 3,
    spaceBetween: 5,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },  
  });

  document.querySelectorAll('.accordeon__triger').forEach((item)=>{
    item.addEventListener('click',()=> {
      item.parentNode.classList.toggle('is--active')
    })
  })





  