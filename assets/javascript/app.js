var map;
var infowindow;

$(document).ready(function(){
  //declare destination and queryURL

  var coordinates = [];

  function weather(){   
    // This is our API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    
    // Here we are building the URL we need to query the database
    var destination = $("#locationInput").val().trim();
    var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + destination + "&units=imperial&appid=" + APIKey;
    
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL2,
      method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .done(function(response) {
    
      // Log the queryURL
      console.log(queryURL2);
    
      // Log the resulting object
      console.log(response);
    
      // Transfer content to HTML
      // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".rain").text("RAIN OR SHINE: " + response.weather["0"].main);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);
            
    
      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
      console.log("RAIN OR SHINE: " + response.weather["0"].main);
    });
  }
    
  function map(){
    var destination = $("#locationInput").val().trim();
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destination + "&key=AIzaSyDsM1Id3r1WfiYDha-f7fYJgEjRjO0hKl0&libraries=places";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response){
      console.log(response);
      initMap(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
      console.log(response.results[0].geometry.location.lat);
      console.log(response.results[0].geometry.location.lng);
    })
  }
    function initMap(lat, lng) {
      var mars = {lat: lat, lng: lng};
      //activities();
      map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 11,
        center: mars
      });
      console.log("mars is");
      console.log(mars);
      var marker = new google.maps.Marker({
        position: mars,
        map: map
      });
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: mars,
        radius: 500,
        type: ['store']
      }, callback);

      service.nearbySearch({
        location: mars,
        radius: 5000,
        type: ['park']
      }, callbackOutDoor);
    

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < 5; i++) {
          createMarker(results[i]);
          console.log(results[i]);
          $("#indoor").append("<h3>" + results[i].name + "</h3> <img src='"+ results[i].icon +"'> <ul> <li> Open Now? "+ results[i].opening_hours.open_now + "</li> <li> Rating: " + results[i].rating + "</li> <li>")
        }
      }
    }

    function callbackOutDoor(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < 5; i++) {
          createMarker(results[i]);
          console.log(results[i]);
          $("#outdoor").append("<h3>" + results[i].name + "</h3> <img src='"+ results[i].icon + "</li> <li> Rating: " + results[i].rating + "</li> <li>")
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    }
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
      /*function activities(){
        var latitude = mars.lat;
        var longitude = mars.lng;

        console.log("LATITUDE IS " + latitude);
        outdoorActivities();
        indoorActivities();

        function outdoorActivities(){
          var outdoorURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=5000&keyword=park&key=AIzaSyCP0neI6D2EkBV5VcN14hmy3d4gILynpzk"
          console.log("ASFNJDSGDJFGADS");
    
          $.ajax({
            url: outdoorURL,
            method: "GET",
            dataType: 'jsonp',
            cache: false
          }) .done(function(response){
            console.log(response);
            $("#indoor").append("<h3>" + response.results.name + "</h3> <img src='"+ response.results.icon +"'> <ul> <li> Open Now? "+ response.results.opening_hours.open_now + "</li> <li> Rating: " + response.results.rating + "</li> <li>");
          })
        }
        
    
        function indoorActivities(){
          console.log("LAT AND LNG " + latitude + longitude);
          var indoorURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=5000&keyword=park&key=AIzaSyCP0neI6D2EkBV5VcN14hmy3d4gILynpzk"
    
          $.ajax({
            url: indoorURL,
            method: "GET",
            dataType: 'jsonp',
            cache: false
          }) .done(function(response){
            console.log(response);
            $("#indoor").append("<h3>" + response.results.name + "</h3> <img src='"+ response.results.icon +"'> <ul> <li> Open Now? "+ response.results.opening_hours.open_now + "</li> <li> Rating: " + response.results.rating + "</li> </ul>");
          })
        }
      }
      */


    
  

  // function activities(){
  //   var latitude = "";
  //   var longitude = "";
  //   function outdoorActivities(){
  //     var outdoorURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=5000&keyword=park&key=AIzaSyCP0neI6D2EkBV5VcN14hmy3d4gILynpzk"

  //     $.ajax({
  //       url: outdoorURL,
  //       method: "GET"
  //     }) .done(function(response){
  //       console.log(response);
  //       $("#indoor").append("<h3>" + response.results.name + "</h3> <img src='"+ response.results.icon +"'> <ul> <li> Open Now? "+ response.results.opening_hours.open_now + "</li> <li> Rating: " + response.results.rating + "</li> <li>");
  //     })
  //   }
    

  //   function indoorActivities(){
  //     var indoorURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitutde + "&radius=5000&keyword=park&key=AIzaSyCP0neI6D2EkBV5VcN14hmy3d4gILynpzk"

  //     $.ajax({
  //       url: indoorURL,
  //       method: "GET"
  //     }) .done(function(response){
  //       console.log(response);
  //       $("#indoor").append("<h3>" + response.results.name + "</h3> <img src='"+ response.results.icon +"'> <ul> <li> Open Now? "+ response.results.opening_hours.open_now + "</li> <li> Rating: " + response.results.rating + "</li> </ul>");
  //     })
  //   }
  // }



  $(".btn").on('click',function(){ 
    event.preventDefault(); 
    console.log("destination");
    map();
    weather();
    });
        
});
