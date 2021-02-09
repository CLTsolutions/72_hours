import { useEffect, useState } from 'react';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
// the zomato import 
import Restaurants from './components/zomato/restaurants';
// A component import
// import Navbar from './components/Navbar';
import Nasa from './components/nasa/Nasa';
import Weather from './components/weather/weather'

// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  const [location, setLocation] = useState({latitude: 0, longitude: 0})
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      );
    })
  }, [])

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      {/* <Navbar /> */}
      <Nasa long={location.longitude} lat={location.latitude} />
      <hr/>
      <Restaurants />
      <br/>
      <Weather long={location.longitude} lat={location.latitude} />
      <hr/>
    </div>
  );
}

// Makes our Component available for import
export default App;