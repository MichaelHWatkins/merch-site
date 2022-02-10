import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
        <Item whenItemClicked = { props.onItemSelection} 
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemDisplay.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemDisplay;