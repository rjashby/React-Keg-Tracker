import React from "react";
import PropTypes from "prop-types";

function KegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default KegForm;