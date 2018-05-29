const request = require('request');
const apiKey = 'AIzaSyDPGSbCKXsW1Ssb4MQFCaFBbTWjz_GAHqo';

var geocodeAddress = (address) => {
    var address = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDPGSbCKXsW1Ssb4MQFCaFBbTWjz_GAHqo&address=' + address, 
                {json: true}, 
                (error, response, body) => {
                    if(error) {
                        reject("Erro ao conectar a API");
                    } else if (body.status === "ZERO_RESULTS") {
                        reject("Endereço não encontrado");
                    } else if (body.status === "OK"){
                        resolve({
                            address: body.results[0].formatted_address,
                            lat: body.results[0].geometry.location.lat,
                            lng: body.results[0].geometry.location.lng
                        });
                    }
                });
    });
};

geocodeAddress('19146').then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
})