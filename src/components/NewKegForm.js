import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg To List" />
    </React.Fragment>
  );
}

// We also need to add PropTypes for our new prop.
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;