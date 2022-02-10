import React from "react";
import PropTypes from "prop-types";
function Item(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <h3>{props.quantity}</h3>
      {/* <p><em>{props.quantity}</em></p> */}
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};
export default Item;