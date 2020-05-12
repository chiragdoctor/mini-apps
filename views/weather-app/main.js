const city = document.getElementById('city');
city.addEventListener('change', onCityChange);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getKelToCel = (temp) => {
    const kelToCel = 273.15;
    const tempInCel = temp - kelToCel;
    return tempInCel.toFixed(2);
}

const getFiveDayHourlyReport = (cityName) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const apiCall = `${url}${cityName}&appid=8e5c5d89aa0321b039a906842ea53fed`;
    return axios.get(apiCall);
}

function constructChart(chart, ctx, labels, data) {
    const myChart = new Chart(ctx, {
        type: chart,
        data: {
            labels,
            datasets: [{
                label: 'Tempreature',
                data,
                backgroundColor: function(context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 0 ? 'red' : getRandomColor();  // draw negative values in red
                        
                },
                borderColor: function(context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 0 ? 'red' : getRandomColor(); // draw negative values in red
                        
                },
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function contructLineChart() {

}

function onCityChange(event) {
    getFiveDayHourlyReport(event.target.value)
    .then(({ data: { list, city } }) => {
        const labels = list.map(l => l.dt_txt.split(' '));
        const data = list.map(l => getKelToCel(l.main.temp));
        const ctx = document.getElementById('myChart');
        const ctxLine = document.getElementById('myChartLine');
        const ctxPie = document.getElementById('myChartPie');

        constructChart('bar', ctx, labels, data);
        constructChart('line', ctxLine, labels, data);
        constructChart('pie', ctxPie, labels, data);
    })        
}

