const weather_URL = 'https://community-open-weather-map.p.rapidapi.com/weather?'
const icon_URL = 'https://openweathermap.org/img/wn/'

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': `${import.meta.env.VITE_API_HOST}`,
    'x-rapidapi-key': `${import.meta.env.VITE_API_KEY}`,
  },
}
export const getWeather = (city, unit, lang) => {
  const query = `q=${city}&units=${unit}&lang=${lang}`
  const url = `${weather_URL}${query}`

  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
}
