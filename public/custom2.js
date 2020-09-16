// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, {
//       indicators: false,
//       padding: 200,
//     });
//   });

  function moveNextCarousel(){
    $('.carousel').carousel('next');
  }
  function movePrevCarousel(){
    $('.carousel').carousel('prev');
  }
   
 