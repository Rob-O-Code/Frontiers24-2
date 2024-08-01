class OWMPollution {
    constructor(APIKEY) {
        this.APIKEY = APIKEY;
        this.lat = 39.952583;
        this.lon = -75.165222;
        this.json = null;
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
        let URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${this.APIKEY}`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    testRequest(num, callback) {
        let self = this;
        fetch(`./testjson/pollution${num}.json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                self.json = data;
                callback();
            });
    }

    // See https://openweathermap.org/api/air-pollution
    getAQI() {
        return this.json.list[0].main.aqi;
    }

    // See https://openweathermap.org/api/air-pollution
    getComponents() {
        if (this.json === null) {
            throw(`Error: No ${this.constructor.name} request has been made`)
        }
        return this.json.list[0].components;
    }
}