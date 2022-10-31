import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const Footer = () => (
    <BottomNavigation className="footer" showLabels>
      <BottomNavigationAction label="Recents"/>
      <BottomNavigationAction label="Favorites" />
      <BottomNavigationAction label="Archive" />
    </BottomNavigation>
);

export default Footer;
