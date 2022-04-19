import { useState, useEffect } from 'react'
import '/styles/App.css'
import Home from '/pages/Home'

function App() {
  const [userGeolocation, setUserGeolocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    if (!localStorage.getItem('userGeolocation')) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserGeolocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
      localStorage.setItem('userGeolocation', JSON.stringify(userGeolocation))
    }
  }, [])

  return (
    <div className="App">
      <div>
        <p>hola</p>
      </div>
    </div>
  )
}

export default App
