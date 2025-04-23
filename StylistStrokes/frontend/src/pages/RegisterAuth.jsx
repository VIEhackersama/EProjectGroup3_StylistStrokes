import React, { useState } from "react";
import axios from "axios";
import RegisterPage from "../components/Login-register/RegisterPage";
export default function Register() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const registerAPI = async (e) => {
    console.log("Register API called!");
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });
      if (res.status === 201) {
        setMessage("Successfull! Please login to your account!");
        SetName("");
        SetEmail("");
        SetPassword("");
      } else {
        setMessage("Register failed! Please try later");
      }
    } catch (error) {
      console.error("Error occurred!", error);
    }
  };

  return (
    <RegisterPage
      name={name}
      email={email}
      password={password}
      show={show}
      message={message}
      SetName={SetName}
      SetEmail={SetEmail}
      SetPassword={SetPassword}
      setShow={setShow}
      registerAPI={registerAPI}
    />
  );
}
