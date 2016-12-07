$(document).ready( function(){
	console.log("Esta listo");
	// funcion para ocultar la felcha en index
	$(".js-menu").hide();


// ETAPA 8

	$(".js-show-make").click(function(){
		$(".page").addClass("make","active");
		$(".js-show-make").addClass("active");
		$(".js-show-recipe").removeClass("active");

	});

	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(".js-show-make").removeClass("active");
		$(".js-show-recipe").addClass("active");
	});
	
	// ETAPA 10

	$(".js-back").click(function(){
		window.location = 'index.html';

		
	});
		

});