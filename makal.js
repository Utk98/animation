$(document).ready(function(){
 
    $surface=$('.surface');
    $car=$('.car');

    $(document).on('keypress',function(e){
      if(e.which ==13){
       $($surface).toggleClass('moveRight');
       $($car).toggleClass('suspension');
    }
   })

});
