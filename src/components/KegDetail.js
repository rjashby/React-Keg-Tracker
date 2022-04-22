import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h4>Name: {keg.name} - {keg.brand}</h4>
      <h4>Price: ${keg.price}</h4>
      <p>Alcohol Content: <em>{keg.alcoholContent}</em></p>
      <p>Pints Left: <em>{keg.pints}</em></p>
      <button onClick={ props.onClickingEdit }>Update Keg Details</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg From System</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;