import React from 'react';
import ItemForm from './ItemForm'
import ItemDisplay from './ItemDisplay'

const initialItems = [
  {
    name: "T-shirts",
    price: 15, 
    quantity: 300
  },
  
  {
    name: "Art Prints",
    price: 70,
    quantity: 40
  },

  {
    name: "Miniatures",
    price: 45,
    quantity: 80
  },

  {
    name: "Pins",
    price: 5,
    quantity: 10000
  },

  {
    name: "Concessions",
    price: 5,
    quantity: 10000
  }
]

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableItems: [...initialItems]
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddItem = (newItem) => {
    const newAvailableItems = this.state.availableItems.concat(newItem);
    this.setState({availableItems: newAvailableItems, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <ItemForm onNewItemCreation={this.handleAddItem} />
      buttonText = "Return to merch list";
    }else {
      currentlyVisibleState = <ItemDisplay itemList={this.state.availableItems} />;
      buttonText = "Return to form";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ItemControl;