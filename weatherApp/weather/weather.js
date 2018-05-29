const request = require('request');

var weather = (lat, lng, callback) => {

    request({url:`https://api.darksky.net/forecast/4d51607a4929adbe22754e2b39f67376/${lat},${lng}?lang=pt&units=si&exclude=minutely,hourly,daily,alerts,flags`,
            json: true}, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined, body.currently.temperature);
            } else {
                callback("Erro ao buscar dados");
            }
        });

};

module.exports.get = weather;