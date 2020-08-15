var selCity = " ";
var queryURL = " ";
var queryUVI = " ";
var queryFiveDay = " ";

$(document).ready(function () {
    // Get value on button click and show alert
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        selCity = $("#selCity").val();
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + selCity + "&appid=2464fa0d1e7b9d4d2876e6cb88618f14"
        queryFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + selCity + "&appid=2464fa0d1e7b9d4d2876e6cb88618f14"
        
        // Get weather data for Jumbotron and 5 day with click
        $.ajax({
            url: queryURL,
            method: "GET"
            
            // Jumbotron information
        }).then(function (response) {
            var tempF = (response.main.temp - 273.15) * 1.80 + 32
            var lat = (response.coord.lat)
            var long = (response.coord.lon)
            queryUVI = "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=2464fa0d1e7b9d4d2876e6cb88618f14&lat=" + lat + "&lon=" + long + "&cnt=5"
            
            $("#currentCity").text(response.name + "  " + (moment(response.dt*1000).format("MM/DD/YYYY")));
            $("#temp").text("Temperature: " + tempF.toFixed(2)) + "°F";
            $("#humidity").text("Humidity: " + (response.main.humidity)) + "%";
            $("#wind").text("Wind Speed: " + (response.wind.speed)) + "MPH";

            // UV Index information
            $.ajax({
                url: queryUVI,
                method: "GET"
            }).then(function (response) {
                
                $("#uvIndex").text("UV Index: " + (response[0].value));
                $("#uvIndex1").text("UV Index: " + (response[1].value));
                $("#uvIndex2").text("UV Index: " + (response[2].value));
                $("#uvIndex3").text("UV Index: " + (response[3].value));
                $("#uvIndex4").text("UV Index: " + (response[4].value));
                $("#uvIndex5").text("UV Index: " + (response[5].value));
            })

            //5 day forecast information
            $.ajax({
                url: queryFiveDay,
                method: "GET"
            }).then(function(response){
                var tempF1 = (response.list[1].main.temp - 273.15) * 1.80 + 32
                var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32
                var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32
                var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32
                var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32


                $("#date1").text(moment(response.list[1].dt*1000).format("MM/DD/YYYY"));
                $("#day1").attr('src', "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png")
                $("#temp1").text("Temperature: " + tempF1.toFixed(2)) + "°F";
                $("#humidity1").text("Humidity: " + (response.list[1].main.humidity)) + "%";
                $("#wind1").text("Wind Speed: " + (response.list[1].wind.speed)) + "MPH";

                $("#date2").text(moment(response.list[8].dt*1000).format("MM/DD/YYYY"));
                $("#day2").attr('src', "http://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png")
                $("#temp2").text("Temperature: " + tempF2.toFixed(2)) + "°F";
                $("#humidity2").text("Humidity: " + (response.list[0].main.humidity)) + "%";
                $("#wind2").text("Wind Speed: " + (response.list[8].wind.speed)) + "MPH";

                $("#date3").text(moment(response.list[16].dt*1000).format("MM/DD/YYYY"));
                $("#day3").attr('src', "http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png")
                $("#temp3").text("Temperature: " + tempF3.toFixed(2)) + "°F";
                $("#humidity3").text("Humidity: " + (response.list[0].main.humidity)) + "%";
                $("#wind3").text("Wind Speed: " + (response.list[16].wind.speed)) + "MPH";

                $("#date4").text(moment(response.list[24].dt*1000).format("MM/DD/YYYY"));
                $("#day4").attr('src', "http://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png")
                $("#temp4").text("Temperature: " + tempF4.toFixed(2)) + "°F";
                $("#humidity3").text("Humidity: " + (response.list[0].main.humidity)) + "%";
                $("#wind3").text("Wind Speed: " + (response.list[24].wind.speed)) + "MPH";

                $("#date5").text(moment(response.list[32].dt*1000).format("MM/DD/YYYY"));
                $("#day5").attr('src', "http://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png")
                $("#temp5").text("Temperature: " + tempF5.toFixed(2)) + "°F";
                $("#humidity5").text("Humidity: " + (response.list[0].main.humidity)) + "%";
                $("#wind5").text("Wind Speed: " + (response.list[32].wind.speed)) + "MPH";
            })

        });
    });


});

