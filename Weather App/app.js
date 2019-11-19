function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



function showPosition(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, true);
    xhr.onload = function () {
        if (this.status === 200) {
            var weather = JSON.parse(this.responseText);
            console.log(weather);

            var location = document.getElementById('location');
            var temperature = document.getElementById('temperature');
            var weather_condition = document.getElementById('weather-condition');
            var weather_status = document.getElementById('weather-status');

            location.innerHTML = weather.name + "," + weather.sys.country;
            weather_condition.innerHTML = weather.weather[0].main;

            console.log(weather.coord.lat);
            console.log(weather.coord.lon);
        }
    }
    xhr.send();
}