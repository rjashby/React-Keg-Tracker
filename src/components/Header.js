import React from "react";
import kegs from "./../img/kegs.jpg";

function Header(){
  return (
    <React.Fragment>
      <img src={kegs} alt="kegs" />
    </React.Fragment>
  );
}

export default Header;