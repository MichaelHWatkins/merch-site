import React from "react";
import PropTypes from "prop-types";
function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};
export default Item;