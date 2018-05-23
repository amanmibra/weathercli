const { key } = require('./config')
const axios = require('axios')

function currently (zip) {
  const url = `http://api.apixu.com/v1/current.json?key=${key}&q=${zip}`
  axios.get(url)
  .then((res) => {
    const data = res.data;
    const cityData = data.location;
    const today = data.current;

    const mess = `\n Today in ${cityData.name}, ${cityData.region} in ${cityData.country}, the temperature is ${today.temp_f}°F with a humidity of ${today.humidity} and winds of ${today.wind_mph} MPH. \n`;
    console.log(mess);
  })
  .catch((err) => {
    console.log('ERROR: ', err.response.data.error.message);
  });
}

function forecast (zip, days) {
  const url = `http://api.apixu.com/v1/forecast.json?key=${key}&q=${zip}&days=${days}`
  axios.get(url)
  .then((res) => {
    const forecasts = res.data.forecast.forecastday;
    forecasts.forEach((forecast) => {
      const mess = `${forecast.date}: ${forecast.day.avgtemp_f}°F`;
      console.log(mess);
    })
  })
  .catch((err) => {
    console.log('ERROR: ', err);
  });
}

function zipcode (zip) {

}

module.exports = {
  currently,
  forecast,
  zipcode
}
