$(document).ready(function(){
    //declare destination and queryURL
    var destination = "orlando"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destination + "&key=AIzaSyDsM1Id3r1WfiYDha-f7fYJgEjRjO0hKl0&output=embed";


   
      // This is our API key
      var APIKey = "166a433c57516f51dfab1f7edaed8413";
  
      // Here we are building the URL we need to query the database
      var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=Orlando,Florida&units=imperial&appid=" + APIKey;
  
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
    
    


});