import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigation=useNavigate();
  return (
    <>
      <nav id="menu" className=" flex">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button onClick={()=>{navigation("/createBug")}}>Create Bug</button>
    </>
  );
};

export default Navigation;
