import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="hero">
      <h1>Landing Page</h1>
      <ButtonGroup>
        <Button variant="solid" size="md" colorScheme="blue">
          <NavLink to="/userLogin">User</NavLink>
        </Button>
        <Button variant="solid" size="md" colorScheme="blue">
          <NavLink to="/adminLogin">Admin</NavLink>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LandingPage;
