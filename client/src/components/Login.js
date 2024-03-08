import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/auth.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const submit=async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3002/auth/login",{
                username,
                password
            })
            alert("Login Successful");
            navigate('/home')
        }catch(err)
        {
            console.log(err);
        }
    }
  return (
<form>
    <h3>Login</h3>

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
  <button 
  type="submit" 
  className="btn btn-primary"
  onClick={submit}
  >
    Login
  </button>
</div>
<p className="forgot-password text-right">
  Not Registered ? <NavLink to="/signup">Sign Up</NavLink>
</p>
</form>
  )
}

export default Login