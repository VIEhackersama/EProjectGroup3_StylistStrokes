import React from "react";
import "../components/learn.css";

function Learn(props) {
  return (
    <div className="form-control card mt-4 shadow card-hover" style={{ width: "auto" }}>
      <img
        src={props.image}
        className="card-img-top mx-auto d-block img-fluid"
        style={{ width: "25rem", height: "19rem" }}
        alt="..."
      />
      <div className="card-body text-center">
        <span className="card-title">{props.name}</span>
        <p className="card-text">{props.des}</p>
        <a href="#" className="btn btn-primary">Learn more!</a>
      </div>
    </div>
  );
}

export default Learn;
