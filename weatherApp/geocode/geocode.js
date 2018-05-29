const request = require('request');

var geocodeAddress = (address, callback) => {
    var address = encodeURI(address);
    var apiKey = 'AIzaSyDPGSbCKXsW1Ssb4MQFCaFBbTWjz_GAHqo';

    request('https://maps.googleapis.com/maps/api/geocode/json?key=' + apiKey + '&address=' + address, 
            {json: true}, 
            (error, response, body) => {
                if(error) {
                    callback("Erro ao conectar a API");
                } else if (body.status === "ZERO_RESULTS") {
                    callback("Endereço não encontrado");
                } else if (body.status === "OK"){
                    callback(undefined, {
                        address: body.results[0].formatted_address,
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng
                    });
                }
            });
}

module.exports.geocodeAddress = geocodeAddress;