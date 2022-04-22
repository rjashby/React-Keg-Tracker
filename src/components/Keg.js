import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h4>{props.name} - {props.brand}</h4>
        <h4>{props.price}</h4>
        <p><em>{props.alcoholContent}</em></p>
        <button onClick = {() => props.whenKegClicked(props.id)}>View Keg Details</button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func 
};

export default Keg;