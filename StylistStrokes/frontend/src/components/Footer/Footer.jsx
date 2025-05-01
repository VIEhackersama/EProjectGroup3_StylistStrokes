import React from "react";
import Footer_1 from "./../Footer/Footer1";
import Footer_2 from "./../Footer/Footer2";
import Footer_3 from "./Footer3";
export default function Footer() {
  return (
    <div>
      <div 
        style={{
          // backgroundImage: "linear-gradient(135deg,rgb(6, 9, 92),rgb(127, 54, 15) 100%)"
          backgroundImage: "url(https://img.freepik.com/free-photo/grungy-blue-background-natural-cement-stone-old-texture-as-retro-pattern-wall-conceptual-wal_1258-73215.jpg)"
         }}
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
