$('ul#filter a').click(function(){
  







  // Remove class
  $('ul#filter .current').removeClass('current');
  
  // Add parent class
  $(this).parent().addClass('current');
  
  // find same class of menu
  var filterVal = $(this).text().toLowerCase().replace(' ','-');
  
  if(filterVal == 'all') {
    // If click all execute this
    $('ul#portfolio li').animate({
      opacity: 1,
      rotateY:'360deg'
    },1000,'ease-in');
    
  }else{
    // Each all and filter values
    $('ul#portfolio li').each(function() {
      // Hide 
      if(!$(this).hasClass(filterVal)) {
        $(this).animate({
          opacity: 0.1,
           rotateY:'0deg'
        },1000,'ease-out');
       // Show
      }else{
        $(this).animate({
          opacity: 1,
           rotateY:'360deg'
        },1000,'ease-in');
      }
    });
  }
  return false;
});