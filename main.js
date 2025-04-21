const API = "76a1ccf827f3e0077d5cc9e183b2d57b";
const CITY = "Kharkiv";

function fetchWeather() {
const url =  `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}&units=metric&lang=ua`;
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Download error');
            }
            return response.json();
        })

        .then(function(data) {
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
        })

        .catch(function(error) {
            console.error('An error occurred:', error);
            document.getElementById('temperature').textContent = '--°C';
            document.getElementById('description').textContent = 'Failed to load data';
        })
}
fetchWeather();