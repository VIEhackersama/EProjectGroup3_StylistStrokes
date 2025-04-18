import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Register() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const registerAPI = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });
      if (res.status === 201) {
        setMessage("Successfull! Please login to your account!")
        SetName("");
        SetEmail("");
        SetPassword("");
      }
      else {
        setMessage("Register failed! Please try later")
      }
    }
    catch (error) {
      console.error("Error occured!", error);
    }
  };


  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 my-4"
      style={{
        backgroundImage: "url(https://www.artnews.com/wp-content/uploads/2020/12/AdobeStock_391176229.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card p-4 shadow" style={{ minWidth: "400px", maxWidth: "1000px" }}>
        <h3 className="mb-3 text-center">Register now! It's free</h3>
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={registerAPI}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => SetName(e.target.value)}
              required
              placeholder="Please provide your name, or nickname"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              required
              placeholder="Email is mandatory"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type={show ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              required
              placeholder="Password is obligatory"
            />
            <div onClick={() => setShow(!show)}>
              {show ? "Hide password" : "Show password"}
            </div>
          </div>
          <button type="submit" style={{backgroundColor:"orange"}} className="btn w-100 text-white">Create a new account</button>
        </form>
      </div>
    </div>
  );
};