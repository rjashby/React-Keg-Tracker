import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div>
        <h4>Name: {props.name} - {props.brand}</h4>
        <span style={{color: 'green'}}>
          <h4>Price: ${props.price}</h4>
        </span>
        <p>Alcohol Content: <em>{props.alcoholContent}</em></p>
        <p>Pints Left: <em>{props.pints}</em></p>
        <button onClick = {() => props.whenKegClicked(props.id)}>View Keg Details</button>
        <button onClick = {() => props.whenBeerSold(props.id)}>1 Beer Down</button>
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
  pints: PropTypes.string, // PINTS
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenBeerSold: PropTypes.func
};

export default Keg;