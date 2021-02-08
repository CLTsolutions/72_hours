import React from 'react';
import { usePosition } from 'use-position';

// Function name matches file name
const Location = () => {
    const watch = true;
    const {
        latitude,
        longitude
    } = usePosition(watch);

    return (
        <div>
            Current Location
        </div>
    )
};

// Makes it available for import
export default Location;