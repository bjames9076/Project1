$(document).ready(function(){
    //declare destination and queryURL
    var destination = "orlando"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destination + "&key=AIzaSyDsM1Id3r1WfiYDha-f7fYJgEjRjO0hKl0&output=embed";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).done(function(response){
    //     console.log(response);

    //     var map = $("<iframe>");
    //     map.attr('src', queryURL);
    //     map.attr({width: '100%', height:'100%'});
    //     $("#googleMap").append(map);
    // })

    // var map;
    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('googleMap'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   });
    // }


});