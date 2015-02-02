$(document).ready(function(){
	$('#ilustraciones').click(function(){
		$('.merchandising').css('display','none');
		$('.dibujo').css('display','inline');
		$('#ilustraciones').addClass("active");
		$('#merch').removeClass("active");

		});
		
	$('#merch').click(function(){
		$('.merchandising').css('display','inline');
		$('.dibujo').css('display','none');
		$('#merch').addClass("active");
		$('#ilustraciones').removeClass("active");

		});
		
	$('#proyectofin').click(function(){
		$('#proyectofin').addClass("active");
		$('#otrosproy').removeClass("active");
	});
	$('#otrosproy').click(function(){
		$('#otrosproy').addClass("active");
		$('#proyectofin').removeClass("active");
		
	});
});
