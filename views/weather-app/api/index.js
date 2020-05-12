const axios = require('axios');
const config = require('config');

const getCityWeather = (cityName) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const apiCall = `${url}${cityName}&APPID=${config.get('API')}`;
    return axios.get(apiCall);
}

module.exports = getCityWeather;


