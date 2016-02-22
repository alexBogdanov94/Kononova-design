$(document).ready(function(){
   $('.toggle').click(function() {
       $('nav').slideToggle(700); 
    });//end menu-nav				
$.supersized({
				
// Functionality
autoplay: 0,
slide_interval          :   3000,		// Length between transitions
transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
transition_speed		:	600,		// Speed of transition
															   
					// Components							
					
slides:[			// Slideshow Images
														
														
{image : 'Images/houseLight.png'},  
{image : 'Images/redChairs.png'},  
{image : 'Images/stylishStairs.png'},  
{image : 'Images/barsAndCafes.png'},  
{image : 'Images/interiors.png'},  
														
]
					
				});//end slider
    
    
    var capArr = ["фотореалистическая разработка 3d фасадов","Разработка дизайна ресторанов", "Разработка дизайна интерьеров и фасадов общественных зданий", "кафе, бары, рестораны", "интерьеры жилых зданий"]
              var i = 0;
    
var imageMax = capArr.length;                
                    $('#nextslide').click(function(){
                       i = (i + 1)%imageMax;
                    var changed = capArr[i];
                      
                   $('.caption h2').text(changed); 
                });  
    //end text changer
                
               $('#prevslide').click(function(){
                   i = (imageMax + i - 1) % imageMax;
                     var p = capArr[i];
                   $('.caption h2').text(p);
               });//end previous slide
               
               

		    });//end script