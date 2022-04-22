import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { v4 } from 'uuid';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        { name: "Bell's",
          brand: "Two Hearted",
          price: "240.00",
          alcoholContent: "7.0",
          pints: "124",
          id: v4()
        },
        { name: "The Alchemist",
          brand: "Heady Topper",
          price: "280.00",
          alcoholContent: "8.0",
          pints: "100",
          id: v4()
        },
        { name: "Tree House Brewing",
          brand: "Very Hazy",
          price: "275.00",
          alcoholContent: "8.6",
          pints: "87",
          id: v4()
        },
        { name: "Russian River",
          brand: "Pliny the Younger",
          price: "295.00",
          alcoholContent: "10.25",
          pints: "66",
          id: v4()
        }
      ],
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false 
      });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handlePintSold = (kegToEdit) => {   // PINTS SOLD FUNCTION
    const oneLessPintKeg = {
      name: kegToEdit.name,
      brand: kegToEdit.brand,
      price: kegToEdit.price,
      alcoholContent: kegToEdit.alcoholContent,
      pints: kegToEdit.pints - 1, // PINTS
      id: kegToEdit.id,
    }
    const editedMainKegList = this.state.mainKegList
      .filter(kegToEdit => kegToEdit.id !== this.state.selectedKeg.id)
      .concat(oneLessPintKeg);
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: null
      });
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      keg = {this.state.selectedKeg} 
      onClickingDelete = {this.handleDeletingKeg} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} onPintSold={this.handlePintsSold}/>; // ADD PINTS SOLD TO LIST
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;