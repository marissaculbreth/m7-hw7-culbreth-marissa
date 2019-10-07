var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        var city = document.createTextNode(apiResult.name);
        var humidity = document.createTextNode(apiResult.main.humidity);

        var cityName = document.getElementById('city');
        var weatherList = document.getElementById('weather');

        cityName.appendChild(city);

        weatherList.appendChild(humidity);




    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33544,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
