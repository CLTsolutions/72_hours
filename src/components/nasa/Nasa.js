import { useEffect, useState } from 'react';

import './Nasa.css';

const Nasa = ({lat, long}) => {
    // const url = `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2019-03-11&&dim=0.05&api_key=QHaRH5NLVJMiqZNxZ9I84QtHlOsxTH4mvhHO4z1Y`;
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2014-02-01&dim=0.15&api_key=QHaRH5NLVJMiqZNxZ9I84QtHlOsxTH4mvhHO4z1Y`;
    const [imgUrl, setImgUrl] = useState('');

    const pleaseWork = async() => {
        const response = await fetch(url)
        const picture = await response.json()
        setImgUrl(picture.url)
    }

    useEffect(() => {
        console.log(lat);
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setImgUrl(data.url)
        //     })
        //     .catch(error => console.log(error));

        pleaseWork()        

    }, [lat, long, url]);

    return (
        <div>
            <h1>NASA</h1>
            <div>
                <img src={imgUrl} className='nasa-image' />
            </div>
        </div>
    );
};

export default Nasa;