const Restaurant = (props) => {
    console.log(props);
    return (
        props.restaurants.map((restaurant, index) => 
        {
            return (
                <tr key = {index}>
                    <td>{restaurant.restaurant.name}</td>
                    <td>{restaurant.restaurant.cuisines}</td>
                    <td>{restaurant.restaurant.user_rating.aggregate_rating}</td>
                    <td>{restaurant.restaurant.location.address}</td>
                    <td>{restaurant.restaurant.url}</td>
                </tr>
            )
        })
    )
}
export default Restaurant; 