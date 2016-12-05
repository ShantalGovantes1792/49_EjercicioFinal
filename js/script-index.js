$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	// funcion para ocultar la felcha en index

	$(".js-back").hide();

	function printNews(){
		$("#new").text("NUEVAS RECETAS");

	}


});



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	for ( var i = 0; i <
	 recipesArray.length; i++){

		if ( recipesArray[i].highlighted == true ){
			renderRecipe(recipesArray[i]);
			console.log('Recipes: ', recipesArray[i]);
			}

		}
	};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a <pintar></pintar> la receta HOLA: ', recipe);
	var link = $('<a class="item-recipe" href="#"></a>');
	$(".list-recipes").append(link);
	$(".item-recipe").append('<span class="attribution"></span');
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

