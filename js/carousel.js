   // CAROUSEL
   $(document).ready(function () {
       $('.carousel').carousel({
           dist: -100,
           padding: 150,
           fullWidth: false,
           indicators: false,
           duration: 100,
       });
   });


   $(document).ready(function () {
       $('.carousel').carousel();


       // function for next slide
       $('.next').click(function () {
           $('.carousel').carousel('next');
       });

       // function for prev slide
       $('.prev').click(function () {
           $('.carousel').carousel('prev');
       });
   });


   autoplay()

   function autoplay() {
       $('.carousel').carousel('next');
       setTimeout(autoplay, 4500);
   }
