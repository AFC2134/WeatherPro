var cityNameEl = document.getElementById("city");
var fiveDayEl = document.getElementById("fiveDayForecast");


function getWeatherData() {
    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + cityNameEl.value + "&appid=15a2f6e975005b96c0df56340849949d&units=imperial";
    console.log(apiCall);
    
    fetch(apiCall)
    .then(function (res) {
    return res.json();
})

.then(function (response) {
    console.log(response);
    console.log(response.name);

    var selectedCity = document.createElement('div');
    selectedCity.setAttribute('class', 'cityCard');
    document.getElementById("cityDisplay").appendChild(selectedCity);

    var modifier = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var initDate = new Date(response.dt * 1000);
      var date = initDate.toLocaleDateString("en-US", modifier); 

      city = response.name;
      temp = response.main.temp;
      wind = response.wind.speed;
      humid = response.main.humidity;
      console.log(city, temp, wind, humid);

      var cityDate = document.createElement("li");
       cityDate.innerText =
         " Welcome to " + city + " weather. Today is; " + date;
       selectedCity.appendChild(cityDate);

       var ul = document.createElement("ul");
      ul.setAttribute("style", "padding:5; margin:5;");
      ul.setAttribute("id", "currentList");
      selectedCity.appendChild(ul);

      currentIcon = response.weather[0].icon;
      var todayIcon = document.createElement("img");
      todayIcon.src =
        "http://openweathermap.org/img/wn/" + currentIcon + ".png";
      ul.appendChild(todayIcon);
      todayIcon.setAttribute("class", "currentImage");

      var currTemp = document.createElement("li");
      currTemp.innerText = "Temperature: " + temp;
      ul.appendChild(currTemp);

      var breeze = document.createElement("li");
      breeze.innerText = "Wind: " + wind;
      ul.appendChild(breeze);

      var humidity = document.createElement("li");
      humidity.innerText = "Humidity: " + humid;
      ul.appendChild(humidity);

      console.log(cityDate, currTemp, breeze, humidity);
    });
};




document.getElementById("submitCity").addEventListener("click", getWeatherData);