/*
Purpose of api.js:
Export functions that will make HTTP request to weather API and log needed weather data.
 */

const { key } = require('./config')
const axios = require('axios')

/**
 * currently is the api call made for the "currently" command
 * @param  {[String]} zip [Zipcode]
 */
function currently (zip) {
  const url = `http://api.apixu.com/v1/current.json?key=${key}&q=${zip}`
  axios.get(url)
  .then((res) => {
    const data = res.data;
    const cityData = data.location;
    const today = data.current;

    const mess = `\n Today in ${cityData.name}, ${cityData.region} in ${cityData.country}, the temperature is ${today.temp_f}°F with a humidity of ${today.humidity} and winds of ${today.wind_mph} MPH. \n`;
    console.log('----------');
    console.log(mess);
    console.log('----------');
  })
  .catch((err) => {
    console.log('ERROR: ', err.response.data.error.message);
  });
}

/**
 * forecast is the api call made for the "forecast" command
 * @param  {[String]} zip  [Zipcode]
 * @param  {[number]} days [number of days]
 */
function forecast (zip, days) {
  const url = `http://api.apixu.com/v1/forecast.json?key=${key}&q=${zip}&days=${days}`
  axios.get(url)
  .then((res) => {
    console.log('----------');
    const forecasts = res.data.forecast.forecastday;
    forecasts.forEach((forecast) => {
      const mess = `${forecast.date}: ${forecast.day.avgtemp_f}°F`;
      console.log(mess);
    })
    console.log('----------');
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
