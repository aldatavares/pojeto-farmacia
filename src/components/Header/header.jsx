import React from "react";
import './header.css'
import logo from '../../assets/logo.png'
function Farmacia(){
  return(
    <div> 
      <img src={logo} className = "logo" />
      <h1 className="farma">Farmavista </h1>
    </div>
  )
};
export default Farmacia;