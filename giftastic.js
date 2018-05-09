$(document).ready(function(){

//GLOBAL VARIABLES
//===================================================================================
//array gif categories
var movieCategories = ["horror", "sci-fi", "action", "comedy", "drama", "fantasy", "experimental"];

//FUNCTIONS
//===================================================================================
function displayMovieInfo() 
{
var movie = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieCategories + "&api_key=QbgzdzYfDomA8uk51bX1AgymbF4Rz2sb&limit=10";
//ajax will call to Giphy API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var results = response.data
    console.log(results)
});
}

});


