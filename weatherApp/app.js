const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.get(results, (error, weather) => {
            if (error) {
                console.log(error);
            } else {
                console.log(weather);
            }
        });
    }
});