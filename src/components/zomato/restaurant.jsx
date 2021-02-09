import { Table } from "reactstrap";

const Restaurant = (props) => {
  console.log(props);
  return props.restaurants.map((restaurant, index) => {
    return (
      // <tr key = {index}>
          
      // </tr>

      <Table>
        <thead>
          {/* <table dark hover borderless responsive> */}
          <tr>
            {/* <th scope="row">Name</th>
            <th scope="row">Address</th>
            <th scope="row">Rating</th>
            <th scope="row">Cuisine</th>
            <th scope="row">Link</th> */}
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Cuisine</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
            <tr key={index} className="table-border">
                <td>{restaurant.restaurant.name}</td>
                <td>{restaurant.restaurant.location.address}</td>
                <td>{restaurant.restaurant.user_rating.aggregate_rating}</td>
                <td>{restaurant.restaurant.cuisines}</td>
                <td><a href={restaurant.restaurant.url} target ="blank">{restaurant.restaurant.name}</a></td>
            </tr>
        </tbody>
      </Table>
    );
  });
};
export default Restaurant;
