import React from "react";
import PropTypes from "prop-types";

function MerchItemDetail(props){
  const { item, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h3>{item.name}</h3>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Remove Item</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

MerchItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func, // new code
  onClickingEdit: PropTypes.func
};
export default MerchItemDetail;