$(document).ready(()=>{

	/*The modal-popup is hidded by default while loading the page*/
	$('.modal-popup').hide();
	
	
	/*If the user clicks on the  Open button, the modal gets triggered*/
	$('#trigger').click(()=>{
		$('.modal-popup').fadeIn(300);
		$('.modal-content').fadeIn(500);
	});


	/*If the user clicks on the  close icon, the modal fades out*/
	$('.close-icon').click(()=>{
		$('.modal-content').fadeOut(300);
		$('.modal-popup').fadeOut(500);
	})


	/*If the user clicks on the  close button, the modal fades out*/
	$('#close').click(()=>{
		$('.modal-content').fadeOut(300);
		$('.modal-popup').fadeOut(500);
	});


	/*If the user clicks anywhere outside the modal content, the modal fades out.*/
	$('#modal').click(function (event) 
	{
	   if(!$(event.target).closest('.modal-content').length && !$(event.target).is('.modal-content')) {
	     $(".modal-popup").fadeOut(500);
	   }     
	});
});