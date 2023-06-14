function formatDate(timestamp) {
    let date = new date(timestamps);
    let hours = timestamp.getHours();
     if (hours < 10) {
        hours = '0${hours}'; 
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0${minutes}'; 
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[day.getDay()];
    return '${day} ${hours}:${minutes}';
}
iconElement.setAttribute("alt", response.data.weather[0].description);

function displayTemperature(response) {
    
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date")
    let iconElement = document.querySelector("#icon");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = timestamp(response.data.dt*1000);
    iconElement.setAttribute("src", 'https://openweathermap.org/img/wn/${resonse.data.weather[0].icon}@2x.png');
}

let apiKey = "76fb06fa46a47159706d99bfcf4c874b";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}';


axios.get(apiUrl).then(displayTemperature);