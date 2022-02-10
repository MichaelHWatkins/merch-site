import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function ItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()})
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="name" placeholder="Item name" />
        <input type="number" name="price" placeholder="0" />
        <input type="number" name="quantity" placeholder="0" />
        <button type="submit">Add Item</button>
      </form>
    </React.Fragment>
  );
}

ItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default ItemForm;