import React from 'react';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleClick = () => {

  }

  render(){
    let buttonText = null;
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;