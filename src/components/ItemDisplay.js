import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item, index) =>
        <Item name={item.name}
        price={item.price}
        quantity={item.quantity}
        key={index}/>
      )}
    </React.Fragment>
  );
}

ItemDisplay.propTypes = {
  itemList: PropTypes.array
};

export default ItemDisplay;