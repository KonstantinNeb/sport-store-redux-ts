import React from "react";
import Basket from "../basket";
import Catalog from "../catalog";
import './main.css';

const Main = () => {

  return (
    <div className="main">
      <h4>SPORT STORE</h4>
      <Catalog />
      <Basket />
    </div>
  )
}

export default Main;
