let now = new Date();
console.log(now);

let date = now.getDate();
let milliseconds = now.getMilliseconds();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let h2 = document.querySelector("h2");

h2.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;

function formatDate() {
  let today = `${day}, ${month} ${date}, ${year}`;
  return today;
}

function displayWeather(response){
  console.log(response.data.name);
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}


//Challenge 2
function search(city){
  let apiKey = "be3f7a0cc098a40ce086e9e1e443e7d4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}


function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  search(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);

//Challenge 3
function convertToFa(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCel(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fatemperature = document.querySelector("#fa");
fatemperature.addEventListener("click", convertToFa);

let celtemperature = document.querySelector("#cel");
celtemperature.addEventListener("click", convertToCel);



//week 4

function searchPosition(position) {
  let apiKey = "be3f7a0cc098a40ce086e9e1e443e7d4";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`; 

  axios.get(apiUrl).then(displayWeather);
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temper = document.querySelector("#temperature");
  temper.innerHTML = `${temperature}`;
}

function showPosition(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);

}

let buttonLocation = document.querySelector("#locationBTN");
buttonLocation.addEventListener("click", showPosition);

 search("London");