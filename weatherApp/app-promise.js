const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = encodeURIComponent(argv.address);
var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDPGSbCKXsW1Ssb4MQFCaFBbTWjz_GAHqo&address=' + address;

axios.get(geocodeURL)
    .then((response) => {
        if (response.data.status == "ZERO_RESULTS") {
            throw new Error('Unable to find that address');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://api.darksky.net/forecast/4d51607a4929adbe22754e2b39f67376/${lat},${lng}?lang=pt&units=si&exclude=minutely,hourly,daily,alerts,flags`
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    })
    .then((response) => {  
        var temperature = response.data.currently.temperature;
        console.log(`Agora faz ${temperature}º`);
    })
    .catch((e) => {
        console.log(e.message);
    })