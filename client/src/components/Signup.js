import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit=async (e)=>{
    e.preventDefault();
    try{
        await axios.post("http://localhost:3002/auth/register",{
            username,
            password
        })
        alert("Registration complete")
    }catch(err)
    {
        console.log(err)
    }
  }

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="button" onClick={submit}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <NavLink to="/login">Sign In</NavLink>
      </p>
    </form>
  );
};

export default Signup;
