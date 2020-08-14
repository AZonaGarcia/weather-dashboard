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

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var tempF = (response.main.temp - 273.15) * 1.80 + 32
            var lat = (response.coord.lat)
            var long = (response.coord.lon)
            queryUVI = "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=2464fa0d1e7b9d4d2876e6cb88618f14&lat=" + lat + "&lon=" + long + "&cnt=5"

            $("#currentCity").attr('src', "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")

            
            $("#currentCity").text(response.name);
            $("#temp").text("Temperature: " + tempF.toFixed(2)) + "°F";
            $("#humidity").text("Humidity: " + (response.main.humidity)) + "%";
            $("#wind").text("Wind Speed: " + (response.wind.speed)) + "MPH";

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

            $.ajax({
                url: queryFiveDay,
                method: "GET"
            }).then(function(response){
                var tempF1 = (response.list[0].main.temp - 273.15) * 1.80 + 32

                $("#day1").attr('src', "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png")

                $("#temp1").text("Temperature: " + tempF1.toFixed(2)) + "°F";
                $("#humidity1").text("Humidity: " + (response.list[0].main.humidity)) + "%";
                $("#wind1").text("Wind Speed: " + (response.list[0].wind.speed)) + "MPH";

            })

        });
    });


});

