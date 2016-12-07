$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	renderActivities(activitiesArray);
	// funcion para ocultar la felcha en index

	$(".js-back").hide();

	function printNews(){
		$("#new").text("NUEVAS RECETAS");

	}


});


//
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	for ( var i = 0; i < recipesArray.length; i++){

		if ( recipesArray[i].highlighted == true ){
			renderRecipe(recipesArray[i]);
			console.log('Recipes: ',i);
		}

			// var recipe = recipesArray[i];
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

	// var recipe = recipesArray[i];
	var aItem = $('<a class="item-recipe" href="#"></a>');
	var spanAtrr = $('<span class="attribution"></span');
	var spanTitle = $('<span class="title-recipe"></span>')
			spanTitle.text(recipe.title);
	var spanMetaReci = $('<span class="metadata-recipe"></span>');
	var spanAutoReci = $('<span class="author-recipe"></span>');
			spanAutoReci.text(recipe.source.name);

	var img = $("<img/>");
	var spanBookReci = $('<span class="bookmarks-recipe"></span>');
	var spanIconBook = $('<span class="icon-bookmark"></span>');

	spanBookReci.append(spanIconBook);
	spanMetaReci.append(spanAutoReci);
	spanMetaReci.append(spanBookReci);
	spanAtrr.append(spanTitle);
	spanAtrr.append(spanMetaReci);
	aItem.append(spanAtrr);
	aItem.append(img);
	img.attr('src','img/recipes/320x350/'+recipe.name+'.jpg');

	$(".list-recipes").append(aItem);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

	for ( var i = 0; i < activitiesArray.length; i++){
		// renderActivity(activitiesArray[i]);
		if ( activitiesArray.length > 0 ){
			console.log("esta entrando");
			$(".wrapper-message").hide();
		}
		_.each(activitiesArray, renderActivity);
	}

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
 console.log("anime",recipe);

	var template = 
	'<a href="#" class="item-activity">' +
	  '<span class="attribution">' +
	    '<span class="avatar">' +
	      		'<img src="<%= userAvatar %>" class="image-avatar">' +
	    '</span>' +
	    '<span class="meta">' +
	      '<span class="author"><%= userName %></span> made <span class="recipe"><%= recipeName %></span>: <%= text %> <span class="location">&mdash;<%= place %></span>' +
	    '</span>' +
	  '</span>' +
	  	'<div class="bg-image" style="background-image: url(&quot; <%= image %> &quot;);"></div>' +
	'</a>';


	var compiled = _.template (template);
		var listActi = compiled(recipe);
		console.log('listActi: ', listActi);
		var elemento = $(listActi);

		$('.list-activities').append(elemento);


	}
		


