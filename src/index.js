function formatDate(timestamp) {
    let date = new date(timestamps);
    let hours = timestamp.getHours();
     if (hours < 10) {
        hours = '0${hours}'; 
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0${minutes}'; }
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[day.getDay()];
    return '${day} ${hours}:${minutes}';
}


function displayTemperature(response) {
    
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = timestamp(response.data.dt*1000);
    iconElement.setAttribute("src", 'https://openweathermap.org/img/wn/${resonse.data.weather[0].icon}@2x.png');
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(event) {
    let apiKey = "76fb06fa46a47159706d99bfcf4c874b";
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}';
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value)
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature.innerHTML * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);






let formElement = document.querySelector("search-form");
formElement.addEventListener("submit", handleSubmit);

search("London");

