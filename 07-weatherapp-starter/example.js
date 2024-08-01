// STEP 1: Copy the OWMGeocode and other OWM .js files into your website
// STEP 2: Enter your API key below (uncomment)
// STEP 3: Uncomment the resources for your website
// STEP 4: Write the load functions to perform each step
// STEP 5: Call the load1() function when the weather should load

//const APIKEY = "APIKEYHERE";
//let units = "imperial";

// RESOURCES (Uncomment for each .js file)
// let owmGeocode = new OWMGeocode(APIKEY);
// let owmWeather = new OWMWeather(APIKEY, units);
// let owmForecast = new OWMForecast(APIKEY, units);
// let owmPollution = new OWMPollution(APIKEY);


//    load1()  -->  load2()  -->  load3()
//     |             |             |
//     Get location  |             Display weather
//                   Get weather from location

function load1() {
    owmGeocode.city = "Gloucester, MA"; // or load from a text box, etc.
    owmGeocode.request(load2); // link to second function
}

function load2() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();
    owmWeather.request(load3); // link to third function
}

let firstJSON = {};
function load3() {
    firstJSON = owmWeather.json;
    owmGeocode.city = "Rockport, MA"; // or load from a text box, etc.
    owmGeocode.request(load4);
}

function load4() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();
    owmWeather.request(load5);
}

let secondJSON = {};
function load5() {
    secondJSON = owmWeather.json;

    const weatherReport = document.getElementById("weather-report");
    if (Math.abs(firstJSON.wind.gust - secondJSON.wind.gust) < 0.5) {
        weatherReport.innerHTML = "The gust speeds are about the same";
    } else if (firstJSON.wind.gust < secondJSON.wind.gust) {
        weatherReport.innerHTML = "It's better to fly a kite in Rockport";
    } else {
        weatherReport.innerHTML = "It's better to fly a kite in Gloucester";
    }
}

// function load3() {
//     const loc = document.getElementById("location");
//     loc.innerHTML = `Running example.js...`;

//     const weatherReport = document.getElementById("weather-report");
//     // See display.js for more examples
//     weatherReport.innerHTML = `Weather report for ${owmGeocode.city}: ${owmWeather.json.weather[0].description}`;

//     if (owmWeather.json.main.temp_max > 80) {
//         document.body.style.backgroundColor = "red";
//     } else if (owmWeather.json.main.temp_max > 70) {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "blue";
//     }
// }