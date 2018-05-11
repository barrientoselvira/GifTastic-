$(document).ready(function(){
    console.log("ready")

//GLOBAL VARIABLES 
//====================================================================

var movieCategories = ["horror", "sci-fi", "comedy", "drama", "documentaries"];
console.log(movieCategories)

function theButtons()
{
    //Empty previous buttons
    $("#buttonsHome").empty();
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
function displayMovieInfo()
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


// $(document).on("click", ".gifButton", displayMovieInfo);
// //Add gifs when theButtons are clicked 
// $("#addGif").on("click", function(event)
// {
//     event.preventDefault();
//     //Grab input from html
//     var gif = $("#gifInput").val().trim();
//     //Add cartoon to gifArray
//     movieCategories.push(gif);
//     //Empty value in input box
//     $("#gifInput").val("")
//     //Call theButtons function to update new button
// })

// //For loop for categories
//   for(var i = 0; i < results.length; i++ )
//   {
//  // //Create a div for each gif
//   var theMovie = $("<div>")
//  // //Add class to theMovie
//   theMovie.addClass("theMovieClass")
//  //Var for rating
//   var rating = results[i].rating;
//  //paragraph with rating
//   var ratingInfo = $("<p>").text("Rating:" + rating);
//  //Create image info
//   var gifPic = $("<img>");
//  //Give image tag src to show image
//   gifPic.attr("src", results[i].images.fixed_height_still.url);
//  //Give gif data-still attribute
//   gifPic.attr("data-still", results[i].images.fixed_height.url);
//   gifPic.attr("data-state", "still");
//   gifPic.addClass("gifPic");
//   //Append ratingInfo and gifPic to theMovie
//   theMovie.append(ratingInfo);
//   theMovie.append(gifPic);
//  //Append theMovie to html
//   $("#gifHome").prepend(theMovie);
//   }

//ON CLICK EVENT FUNCTIONS
//======================================================================

//INITIALIZE MAIN FUNCITON
//======================================================================

});


