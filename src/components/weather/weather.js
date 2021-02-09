import { useEffect, useState } from 'react';

import "./weather.css"

// import './weather.css'

const Weather = ({lat, long}) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=21753438a43d6e17986245c12204bb40`;
    const [imgUrl, setImgUrl] = useState('');

    const pleaseWork = async() => {
       const response = await fetch(url)
       const data = await response.json()
       console.log(data)
       setImgUrl(data)
    }
// taco
    useEffect(() => {
        // console.log(lat);
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => console.log(error));

        // // pleaseWork()        
        pleaseWork()

    }, [lat, long, url]);
    
    console.log(imgUrl);

    return (
        <div>
            <h1>Weather</h1>
            <p>County: {imgUrl.name}</p>
            <br />
            <button>Just a Button</button>
            {/* <p>Humidity: {imgUrl.wind.speed}</p> */}
            {/* <div>
                <img src={imgUrl} className='nasa-image' />
            </div> */}
        </div>
    );
};

export default Weather;