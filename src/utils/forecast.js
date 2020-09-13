const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2180808b26009fafae93ee3978ca99f9&query=${(latitude)}, ${(longitude)}`
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback(body.error.info, undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}: with a current tempeture of ${body.current.temperature}C`)
    }
  })
}

module.exports = forecast