import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h4>{props.name} - {props.brand}</h4>
      <h4>{props.price}</h4>
      <p><em>{props.alcoholContent}</em></p>
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