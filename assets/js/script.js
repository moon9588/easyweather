let userFormE1 = document.querySelector("#user-form");
let nameInputE1 = document.querySelector("#city");
let tempE1 = document.querySelector("#temp");

let containerE1 = document.querySelector("#container");
let cityNameE1 = document.querySelector(".city-name");
let fiveDayContainer = document.querySelector('#forecast');

let humidityEl = document.querySelector("#container");
let humidityEl = document.querySelector("#wind");


let apiKey= "8cc8c56f0d44bd4e1c5495a1876cc8fb"

let formSubmitHandler = function (event) {
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

let getCityWeather = function (city) {
    // format the openweather API for city

    let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`

    // fetch from apiUrl
    // get latitude and longitude from fetch
    // pass latitude and longitude into one call API
    // take results from that and put into DOM
}

// requesting url

fetch(apiUrl).then(function (response) {
    if (response.ok) {
        (response.json().then(function (data) {
            console.log(data);
            displayCityWeather(data);
        
        }));
    }
    else {
        alert("Error: This place does not exist ");
    }
    })

    .catch(function (error) {
        // .catch is getting chained onto the end of the '.then()' method
        alert("unable to connect to openweather");
    });

function displaycityWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather [0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { coord } = data;
    console.log(name, icon, description, temp, humidity, speed);
    console.log(coord);

    let lat = coord.lat;
    let lon = coord.lon;

    weather(lat, lon);
}

// containerEl.textContent = '';

// containerEl.textContent = name + description + temp;
cityNameE1.textContent = name
tempE1.textContent = 'Temp: ' + temp + ' F'
humidityEl.textContent = humidity + ' %'
windE1.textContent = speed + 'MPH'
}

function weather(lat, lon) {
    const apiKey = " "

    fetch ("...apt link..." + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            for (let i = 0; i< 5; i++) {
                let fiveDayArticle = document.createElement('article')
                fiveDayArticle.setAttribute('class', 'day'+ i+1)
                fiveDayContainer.append(f1veDayArticle)

                let date = document.createElement ('div')
                date.textContent = moment () .add(i + 1, 'days').format('dddd')
                fiveDayArticle.append(fiveTemp)

                let fiveTemp = document.createElement ('hS')
                // fiveTemp.setAttribute(class,'temp')
                fiveTemp.textContent = data.daily[i].temp.day
                fiveDayArticle.append(fiveTemp)

                let fiveHumidity = document.createElement ('h5')
                // fiveTemp. setAttribute 'class','humidity')
                fiveHumidity.textContent = data.daily[i].humidity
                fiveDayArticle.append(fiveHumidity)

                let fiveWind = document.createElement('h5')
                // fiveWind.setAttribute('class', 'wind')
                fiveWind.textContent = data.daily[i].wind_speed
                fiveDayArticle.append(fiveWind)

            };

        })
}


userFormE1.addEventListener("submit",formSubmitHandler);