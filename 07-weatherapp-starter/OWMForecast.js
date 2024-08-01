class OWMForecast {
    constructor(APIKEY, units) {
        this.APIKEY = APIKEY;
        this.units = units;
        this.lat = 39.952583;
        this.lon = -75.165222;
        this.cnt = 5;
    }

    request(callback) {
        var xhttp = new XMLHttpRequest();
        let self = this;

        xhttp.onreadystatechange = function() {
            if (this.readyState != 4) return;
            if (this.status != 200) {
                alert(`Payload bad (code ${this.status})`);
                return;
            }
            self.json = JSON.parse(this.responseText);
            if (callback !== undefined) {
                callback();
            }
        }
        let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=${this.units}&cnt=${this.cnt}&appid=${this.APIKEY}`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    testRequest(num, callback) {
        let self = this;
        fetch(`./testjson/forecast${num}.json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                self.json = data;
                callback();
            });
    }

    convertTimecode(unix) {
        unix *= 1000; // CONVERT TO MILLISECONDS --> good for JavaScript
        let date = new Date(unix); // pass in ms
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return `${hours}:${minutes.toString().padStart(2, "0")}`;
    }
}