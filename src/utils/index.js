const { key } = require('./../config')
const axios = require('axios')

function isZipcode(zip) {
  url = `http://api.apixu.com/v1/search.json?key=${key}&q=${zip}`
  var test = true;

  return axios.get(url)
  .then((res) => {
    console.log('res: ', res.data);
    return res.length
    if (res.length > 0) {
      console.log('Zipcode is valid.');
    } else {
      console.log('Zipcode is invalid.');
    }
  })
  .catch((err) => {
      console.log('ERROR while checking zipcode.');
  })
}

module.exports = {
  isZipcode,
}
