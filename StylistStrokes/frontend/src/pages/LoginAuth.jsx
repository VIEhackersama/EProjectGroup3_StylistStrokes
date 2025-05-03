import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginPage from "../components/Login-register/LoginPage";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const redirection = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [message, error]);

  const LoginAPI = async (e) => {
    console.log("Login API called!");
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      if (res.status === 200) {
        setError("");
        setMessage("Successfull! Enjoy your lessons!");
        SetEmail("");
        localStorage.setItem("access_token", res.data.token);
        SetPassword("");
        setTimeout(() => {
          setMessage("");
          redirection("/home");
        }, 1500);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Wrong email or password. Please try again!");
      } else {
        setError("Error occured!");
      }
    }
  };

  return (
    <LoginPage
      email={email}
      password={password}
      show={show}
      message={message}
      error={error}
      SetEmail={SetEmail}
      SetPassword={SetPassword}
      setShow={setShow}
      LoginAPI={LoginAPI}
    />
  );
}
