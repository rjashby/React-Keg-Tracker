import React, { useState } from 'react';
import PropTypes from "prop-types";

function Keg(props){
  const [pints, setCount] = useState(124);
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
        <button onClick = {() => props.whenPintSold(props.id)}>Sell One Pint</button>
        <p>There are {pints} pints remaining</p>
        <button onClick={() => setCount(pints - 1)}>Sell One Pint</button>
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
  pints: PropTypes.number, // PINTS
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func
};

export default Keg;