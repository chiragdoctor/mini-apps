const readlineSync = require('readline-sync');
const getCityWeather = require('./api');
const getKelToCel = require('./lib');

function weatherApp() {
    console.clear();
    const cityName = readlineSync.question('Which city weather information you want to know? ');
    getCityWeather(cityName)
        .then(({ data: { main, name } }) => {
            const { temp, humidity } = main
            console.log(`==================================`);
            console.log(`|       ${name} Weather           |`);
            console.log(`==================================`);
            console.log(`|  Temprature   |  ${getKelToCel(temp)}ºC       |`);
            console.log(`|  Humidity     |  ${humidity}%           |`);
            console.log(`==================================`);
            
            const repeat = readlineSync.question('Do you want to get another city weather (y/n)? ');
            if (repeat === 'y') {
                weatherApp();
            }
        })
        .catch((err) => {
            console.log(err);
            weatherApp();
        });
}

weatherApp();


