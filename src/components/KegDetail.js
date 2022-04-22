import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.location} - {keg.names}</h3>
      <p><em>{keg.issue}</em></p>
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