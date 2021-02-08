import { useEffect, useState } from 'react';

import './Nasa.css'

const Nasa = () => {
    const url = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.19&api_key=QHaRH5NLVJMiqZNxZ9I84QtHlOsxTH4mvhHO4z1Y';
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setImgUrl(data.url)
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <div>
            <h1>NASA</h1>
            {imgUrl}
            <div>
                <img src={imgUrl} className='nasa-image' />
            </div>
        </div>
    );
};

export default Nasa;