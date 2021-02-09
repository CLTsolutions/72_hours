import React, { useEffect, useState } from 'react';
import {usePosition} from 'use-position';
import restaurant from './restaurant.jsx';
import {Row, Container, Col} from "reactstrap"; 
import '../../components/zomato/restaurants.css';

const Restaurants = () => {
    const {
        latitude, 
        longitude,
    } = usePosition();
    const [restaurants, setRestaurants] = useState([]);
    const userKey = 'e91ff5346da7eda144795da203ce7880';
    console.log(latitude, longitude);

    const getRestaurant = () => {
        fetch (`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, 
        {
            method: 'GET',
            headers: {
                'user-key':userKey,
                'Content-Type': "application/json"
            }        
        })
        .then(res => res.json())
        .then(data => { console.log(data)
            setRestaurants(data.nearby_restaurants)})  
}   
 
useEffect (() => {
    if (!latitude || !longitude) return;
    getRestaurant();
}, [latitude, longitude])

return (
    <Container>
        <Row>
            <Col lg = "8">
            <h1> Restaurants Near You </h1>
            <br/>
                <table dark hover borderless responsive>
                <thread>
                    <tr>
                        <th scope = "row">Name</th>
                        <th scope = "row">Address</th>
                        <th scope = "row">Rating</th>
                        <th scope = "row">Cuisine</th>
                        <th scope = "row">Link</th>
                    </tr>
                </thread>
                <tbody>
                    {restaurant.length > 0 ?
                    <restaurant restaurants = {restaurants} />: null}
                </tbody>
                </table>
            </Col>
        </Row>
    </Container>
)

}               
export default Restaurants; 
