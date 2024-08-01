class OWMGeocode {
    constructor(APIKEY) {
        this.APIKEY = APIKEY;
        this.city = "Worcester, MA";
        this.state = null;
        this.country = "US";
        this.limit = 1;
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
        let loc = this.city;
        if (this.state !== null) {
            loc += `,${this.state}`;
        }
        if (this.country !== null) {
            loc += `,${this.country}`;
        }
        let URL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=${this.limit}&appid=${this.APIKEY}`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    testRequest(num, callback) {
        let self = this;
        fetch(`./testjson/geocode${num}.json`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                self.json = data;
                callback();
            });
    }

    getLat() {
        return this.json[0].lat;
    }

    getLon() {
        return this.json[0].lon;
    }
}