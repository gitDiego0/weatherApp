import { Helmet } from 'react-helmet'
import Layout from '/components/layout'
import '/styles/Home.css'

export default function Home() {
  const latitude = JSON.parse(localStorage.getItem('userGeolocation')).latitude
  const longitude = JSON.parse(
    localStorage.getItem('userGeolocation')
  ).longitude
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <div className="home">
          <h1>Home</h1>
          <p>Latitude: {latitude} </p>
          <p>Longitude: {longitude} </p>
        </div>
      </Layout>
    </>
  )
}
