import React from 'react';
import ItemForm from './ItemForm'
import ItemDisplay from './ItemDisplay'
import MerchItemDetail from './MerchItemDetail';
import EditItemForm from './EditItemForm'
import {v4} from 'uuid';

const initialItems = [
  {
    name: "T-shirts",
    price: 15, 
    quantity: 300,
    id: v4()
  },
  
  {
    name: "Art Prints",
    price: 70,
    quantity: 40,
    id: v4()
  },

  {
    name: "Miniatures",
    price: 45,
    quantity: 80,
    id: v4()
  },

  {
    name: "Pins",
    price: 5,
    quantity: 10000,
    id: v4()
  },

  {
    name: "Concessions",
    price: 5,
    quantity: 10000,
    id: v4()
  }
]

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableItems: [...initialItems],
      selectedItem: null,
      editing: false
    };
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.availableItems.filter(item => item.id !== id);
    this.setState({
      availableItems: newMainItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.availableItems
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
        availableItems: editedMainItemList,
        editing: false,
        selectedItem: null
      });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.availableItems.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddItem = (newItem) => {
    const newAvailableItems = this.state.availableItems.concat(newItem);
    this.setState({availableItems: newAvailableItems, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} 
      onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } 
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <MerchItemDetail item = {this.state.selectedItem}
      onClickingDelete = {this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Item List";
      
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <ItemForm onNewItemCreation={this.handleAddItem}  />;
      buttonText = "Return to Item List";

    }
    else {
      currentlyVisibleState = <ItemDisplay itemList={this.state.availableItems} onItemSelection={this.handleChangingSelectedItem} />;
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Item";
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