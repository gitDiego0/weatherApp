import { createContext, useReducer } from 'react'

const LocationContext = createContext()

function locationReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        latitude: navigator.geolocation.getCurrentPosition((position) =>
          console.log(position.coords.latitude)
        ),
        longitude: navigator.geolocation.getCurrentPosition(
          (position) => (state.longitude = position.coords.longitude)
        ),
      }
  }
}

function LocationProvider({ children }) {
  const [state, dispatch] = useReducer(locationReducer, {
    latitude: 0,
    longitude: 0,
  })

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  )
}

function LocationConsumer({ children }) {
  return (
    <LocationContext.Consumer>
      {(value) => {
        return children(value)
      }}
    </LocationContext.Consumer>
  )
}
export { LocationProvider, LocationConsumer }
