$(document).ready(function(){

 function moveBGParallax(){	
   

    $('.toUpward').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
			$('.scrolledAmount').html($(window).scrollTop());
			
            // Put together our final background position
            var coords = '0% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });
	
	
	 $('.toLeft').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var xPos = ($(window).scrollTop() / $bgobj.data('speed')); 
            
			$('.scrolledAmount').html($(window).scrollTop());
			
            // Put together our final background position
            var coords = xPos+'% ' + '0px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });
	
	
   }
   
   
   
   $(document).ready(moveBGParallax);
   $(window).resize(moveBGParallax);
 
});