import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/login.css";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/admin/adminRegister", {
        email,
        name,
        username,
        password,
      });
      alert("Registration complete");
      navigate("/adminLogin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="heading">Sign Up</div>
        <form className="form">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="text"
            id="name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="input"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button" onClick={submit}>
            Sign Up
          </button>

          <p className="agreement">
            Already registered <NavLink to="/adminLogin">Sign In</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
