var axios = require('axios');

const OPEN_WEATHER_MAP_URL= 'http://api.openweathermap.org/data/2.5/weather?appid=c737163b7a2c922aeb5a5123a843b088&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if (res.data.error) {
                throw new Error(res.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.response.data.message);
        });
    }
}