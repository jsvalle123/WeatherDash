function renderButtons() {
    $("#city-btn").empty();
    for (var i = 0; i < cities.length; i++) {
        
        var cityButton = $("<button>");
        
        cityButton.addClass("city");

        cityButton.addClass("button");
        
        cityButton.attr("data-name", cities[i]);
        
        cityButton.text(cities[i]);
        $("#city-btn").append(cityButton);
    };

};

var cities = [];

$("#search").on("click", function (event) {

    event.preventDefault();

    $(".hide").removeClass("hide");
  
    var city = $("#city-text").val().trim();
    var isAdded = false;
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].toLowerCase() === city.toLowerCase()) {
            console.log("city added");
            isAdded = true;

        }
    }

    if (isAdded === false) {
       
        cities.push(city);
        localStorage.setItem("cities", JSON.stringify(cities));
        renderButtons();
    }
 
const apiKey ="06b9d7db0be1d26a0451b984e403fc37";
const url =`api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=06b9d7db0be1d26a0451b984e403fc37`;

fetch(url)
.then(response => response.json())
.then(data => console.log(data));
$("#forecast").text("5-Day Forcast:");
$(document).on("click", ".city", displayCityweather);
//function to get API info for each city button
        $(".day1").text(city.name);
        $(".day2").text(city.name);
        $(".day3").text(city.name);
        $(".day4").text(city.name);
        $(".day5").text(city.name);
        
        $(".temp1").text("Temp: "+list.main.temp + "°F");
        $(".temp2").text("Temp: "+list.main.temp + "°F");
        $(".temp3").text("Temp: "+list.main.temp + "°F");
        $(".temp4").text("Temp: "+list.main.temp + "°F");
        $(".temp5").text("Temp: "+list.main.temp + "°F");
    
        $(".hum1").text("Humidity: "+list.main.humidity + "%");
        $(".humid2").text("Humidity: "+list.main.humidity + "%");
        $(".humid3").text("Humidity: "+list.main.humidity + "%");
        $(".humid4").text("Humidity: "+list.main.humidity + "%");
        $(".humid5").text("Humidity: "+list.main.humidity + "%");
        $(document).on("click", ".city", displayCityweather);
},
),
       function displayCityweather() {
           var city = $(this).attr("data-name");
           var date = moment().format("DD/MM/YYYY");
           var cityName = response.name;
       
           console.log(cityName)
           console.log(date)
           $("#cityName").text(cityName + date);
       
           var temper = response.main.temp;
           console.log(temper);
           $("#temp").text(temper + "°F");
       
           var hum = response.main.humity;
           console.log(hum);
           $("#humidity").text("humidity: " + hum + "%");
           var wind = response.wind.speed;
           console.log(wind);
           $("#wind").text("Wind Speed: " + wind + " MPH")
            

           return response.json();
        }
        displayCityweather();
        renderButtons();
