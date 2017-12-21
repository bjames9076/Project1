$(document).ready(function(){
    //declare destination and queryURL
    var destination = "orlando"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destination + "&key=AIzaSyDsM1Id3r1WfiYDha-f7fYJgEjRjO0hKl0&output=embed";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);

        var map = $("<iframe>");
        map.attr('src', queryURL);
        map.attr({width: '450', height:'250'});
        $("#googleMap").append(map);
    })



});