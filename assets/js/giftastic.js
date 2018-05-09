var movieCategories = ["horror", "sci-fi", "action", "comedy", "drama", "fantasy", "experimental"];

function displayMovieInfo() {

var movie = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
movieCategories + "&api_key=QbgzdzYfDomA8uk51bX1AgymbF4Rz2sb&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $("movies-view").text(JSON.stringify(response));

});

 
for(var i = 0; i < movieCategories.length; i++) {

console.log(response);
//create button to submit categories
var submit = $("<button>");

//add a class for the submit button
submit.addClass("movieCategories"); 
//
    }
}


});

