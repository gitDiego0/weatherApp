import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { getWeather } from '/services/weatherAPI'
import Layout from '/components/layout'
import '/styles/Home.css'
import { getToday } from '/hooks/dateFormatter'

export default function Home() {
  const latitude = JSON.parse(localStorage.getItem('userGeolocation')).latitude
  const longitude = JSON.parse(
    localStorage.getItem('userGeolocation')
  ).longitude

  const [weather, setWeather] = useState({})
  const today = getToday()
  useEffect(() => {
    getWeather('Madrid', 'metric', 'sp').then((response) => {
      const { main, name, sys, visibility, wind, weather } = response
      const { temp, feels_like, temp_min, temp_max, humidity } = main
      const { sunrise, sunset } = sys
      const { description, icon } = weather[0]
      const { speed } = wind
      setWeather({
        name,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        sunrise,
        sunset,
        description,
        icon,
        visibility,
        speed,
      })
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <div className="home">
          <header className="header">
            <h1>{weather.name}</h1>
            <h4>{today} </h4>
          </header>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          />
          <div className="basicInfo">
            <div className="columna">
              <span>Temperatura</span>
              <h3> {weather.temp}º</h3>
            </div>
            <div className="columna">
              <span>Viento</span>
              <h3>{weather.speed}m/s</h3>
            </div>
            <div className="columna">
              <span>Humedad</span>
              <h3>{weather.humidity}%</h3>
            </div>
          </div>
          <p>Sensacion térmica: {weather.feels_like} </p>
          <p>Temperatura mínima: {weather.temp_min}º</p>
          <p>Temperatura máxima: {weather.temp_max}º</p>
          <p>Visibilidad: {weather.visibility}m</p>
          <p>Amanecer: {weather.sunrise}</p>
          <p>Puesta de sol: {weather.sunset}</p>
          <p>Descripción: {weather.description}</p>
        </div>
      </Layout>
    </>
  )
}
