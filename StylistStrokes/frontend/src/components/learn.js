import React from "react";
import { Link } from "react-router-dom"; 
import "./learn.css";

function Learn(props) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card shadow-sm rounded-lg card-custom"
        style={{ width: "25rem", height: "auto" }}
      >
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
          style={{
            height: "220px",
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-primary">{props.name}</h5>
          <p className="card-text text-center text-muted">{props.des}</p>

          {/* Hiển thị giá tiền */}
          <p className="text-center text-success fw-bold fs-5">{props.price}</p>

          {/* Nút Learn More */}
          <div className="text-center">
            <a href={props.link} className="btn btn-info btn-lg" style={{ borderRadius: '30px' }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
