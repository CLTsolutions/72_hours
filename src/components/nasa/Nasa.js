// import './Nasa.css'

// // Function name matches file name
// const Nasa = () => {
//     // return must have one parent element
//     return (
//         <div>
//             Also a change
//             72 hour project
//         </div>
//     )
// }

// // Makes it available for import
// export default Nasa;

import { useEffect, useState } from 'react';

const Nasa = () => {
    const url = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY';
    const [data, setData] = useState();

    const initData = async () => {
        const response = await fetch(url);
        const nasa = await response.json();

        console.log(nasa);

        setData(nasa);
    };

    useEffect(() => {
        initData();
    }, []);

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));

    
    return (
        <div>
            <h1>NASA</h1>
        </div>
    );
};

export default Nasa;