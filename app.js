$(".feedbacks-container").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHove: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
