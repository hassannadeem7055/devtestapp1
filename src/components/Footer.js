import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <BottomNavigation
      className="footer"
      showLabels
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
    >
      <BottomNavigationAction value="/" label="Home" />
      <BottomNavigationAction value="/about" label="About Us" />
    </BottomNavigation>
  );
};

export default Footer;
