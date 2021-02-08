import { useEffect, useState } from 'react';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'
import Nasa from './components/nasa/Nasa'

// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  const [locate, setLocate] = useState()
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocate(position);
    })
  }, [])

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <Nasa location={locate} />
      {locate?.coords.longitude}
    </div>
  );
}

// Makes our Component available for import
export default App;