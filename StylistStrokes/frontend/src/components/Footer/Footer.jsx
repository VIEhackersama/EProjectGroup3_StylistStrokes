import React from "react";
import Footer_1 from "./../Footer/Footer1";
import Footer_2 from "./../Footer/Footer2";
export default function Footer() {
  return (
    <div>
      <div 
        style={{ backgroundColor: "#212f3c " }}
        className="text-white py-5 footer"
      >
        <div className="container">
          <Footer_1></Footer_1>
          <Footer_2></Footer_2>
        </div>
      </div>
    </div>
  )
};
