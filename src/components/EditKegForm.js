import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

function EditKegForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <KegForm 
        formSubmissionHandler={handleEditKegFormSubmission} /* new code */ 
        buttonText="Update Keg Details" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EdiKegForm;