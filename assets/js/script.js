let userFormE1 = document.querySelector("#user-form");
let nameInputE1 = document.querySelector("#city");
let tempE1 = document.querySelector("#temp");

let containerE1 = document.querySelector("#container");
let cityNameE1 = document.querySelector(".city-name");
let fiveDayContainer = document.querySelector('#forecast');

let humidityEl = document.querySelector("#container");
let humidityEl = document.querySelector("#wind");


let apiKey= ""

let formSubmitHandler = funcation (event) {
//does not refreash page
event.preventDefault();

//input value
let city = nameInputE1.value.trim();

if (city) {
    getCityWeather(city); {
        // containerE1.textContent = '';
        // nameInputE1.value = "";
    }
}
else {
    alert("Enter correct city name");
};

let getCityWeather = funcation (city) {
    // format the openweather API for city

    let apiUrl = 
}
