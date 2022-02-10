import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function ItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewItemFormSubmission}
      buttonText="Add Item" />
    </React.Fragment>
  );
}

ItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default ItemForm;