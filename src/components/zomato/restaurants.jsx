import React, { useEffect, useState } from 'react';
// import {usePosition} from 'use-position';
import Restaurant from '../zomato/restaurant';
// import {Row, Container, Col} from "reactstrap"; 
import { Table } from "reactstrap"; 
import '../../components/zomato/restaurants.css';

const userKey = 'e91ff5346da7eda144795da203ce7880';
const Restaurants = (props) => {
    const [restaurants, setRestaurants] = useState([]);

useEffect (() => {
    console.log(props.lat, props.long)
    console.log(window.location)
    if (props.lat && props.long){
        console.log('grabbing data')
        fetch (`https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.long}`, {
            method: 'GET',
            headers: {
                'user-key':userKey,
                'Content-Type': "application/json",
            }
        })
        .then(res => res.json())
        .then(json => { console.log(json)
            setRestaurants(json.nearby_restaurants) 
    })
    .catch(err => console.log(err))
}
},
[props.lat, props.long])
 
    
return (
    // <Container>
    //     <Row>
    //         <Col lg = "8">
    //         <h1> Restaurants Near You </h1>
    //         <br/>
    //             <table dark hover borderless responsive>
    //             <thread>
    //                 <tr>
    //                     <th scope = "row">Name</th>
    //                     <th scope = "row">Address</th>
    //                     <th scope = "row">Rating</th>
    //                     <th scope = "row">Cuisine</th>
    //                     <th scope = "row">Link</th>
    //                 </tr>
    //             </thread>
    //             <tbody>
    //                 {Restaurant.length > 0 ?
    //                 <Restaurant restaurants = {restaurants} />: null}
    //             </tbody>
    //             </table>
    //         </Col>
    //     </Row>
    // </Container>
    <div>
        <h1> Restaurants Near You </h1>
        <div className='food-table'>
            {Restaurant.length > 0 ?
            <Restaurant restaurants = {restaurants} />: null}
        </div>
    </div>
)

}               
export default Restaurants; 