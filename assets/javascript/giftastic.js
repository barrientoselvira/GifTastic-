$(document).ready(function(){
    console.log("ready")

//GLOBAL VARIABLES 
//====================================================================

var movieCategories = ["horror", "sci-fi", "comedy", "drama", "documentaries"];

function theButtons()
{
    console.log("hello")
    //Create button for each category
    for (var i = 0; i < movieCategories.length; i++)
    {
    //Create button
    var button = $("<button>");
    //Give buttons class
    button.addClass("gifButton");
    //Give buttons data attribute 
    button.attr("data-name", movieCategories[i]);
    //Give buttons text
    button.text(movieCategories[i]);
    //Append buttons to html
    $("#buttonsHome").append(button);
    }
}


//FUNCTIONS
//=====================================================================
function showGif()
{
//API key 
var movie = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=AMEh4BzCNmxQIQdfRl5K60PbvU7r4QFn&limit=10";
//Make AJAX call to Giphy API 
$.ajax({
    url: queryURL,
    method: "GET"
}).then (function(response){
    var results = response.data
    console.log(response)
})
    }

//ON CLICK EVENT FUNCTIONS
//======================================================================
$("#addGif").on("click", function(event){
    event.preventDefault();

 var movie = $("#addGift").val().trim();
//adding the movie from the array
movieCategories.push(movie);
console.log(movieCategories);

$(document).on("click", ".movie", displayMovieInfo);

});

});