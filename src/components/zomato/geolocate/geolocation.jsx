import React from 'react';
import { UsePosition } from 'use-position';

const Location = () => {
    const watch = true;
    const {
        latitude,
        longitude,
    } = UsePosition(watch);

    return (
        <div className= "locationBox">
            <h3> Current Location </h3>
            <h5 className="changePlease">latitude: {latitude}</h5>
            <h5 className="changePlease">longitude: {longitude}</h5>
        </div>
    );
};
export default Location;
