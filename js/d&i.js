$(document).ready(function(){
	$('#ilustraciones').click(function(){
		$('.merchandising').css('display','none');
		$('.dibujo').css('display','inline');
		$('#ilustraciones').css('background-color','#E0E0E0');
		$('#merch').css('background-color','white');


		});
		
	$('#merch').click(function(){
		$('.merchandising').css('display','inline');
		$('.dibujo').css('display','none');
		$('#merch').css('background-color','#E0E0E0');
		$('#ilustraciones').css('background-color','white');

		});
		
})