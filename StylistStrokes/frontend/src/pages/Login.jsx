import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const redirection = useNavigate();


  useEffect(() => {
    const timeout=setTimeout(() => {
      setMessage("");
      setError("");
    },3000);
    return () => clearTimeout(timeout);
  },[message,error])

  const loginAPI = async (e) => {
    console.log("Login API called!");
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      if (res.status === 200) {
        setError("");
        setMessage("Successfull! Enjoy your lessons!")
        SetEmail("");
        SetPassword("");
        setTimeout(() => {
          setMessage("");
          redirection("/home");
        }, 3500)
      }
    }
    catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Wrong email or password. Please try again!");
      } else {
        setError("Error occured!");
      }
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
        <h3 className="mb-3 text-center">Log into your account</h3>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={loginAPI}>

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
          <button type="submit" style={{ backgroundColor: "orange" }} className="btn w-100 text-white" >Create a new account</button>
        </form>
      </div>
    </div>
  );
}

