import React from "react";
import { Divider, Icon, IconButton } from "@mui/material";
import "../Navbar.style.scss";

export interface NavbarProps {
  style?: React.CSSProperties;
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
}

const NavbarIcon: React.FC<NavbarProps> = ({ label, icon, onClick }) => {
  return (
    <>
      <div className="navbar-container">
        <ul className="common-navbar-icon">
          <li className="common-navbar-icon-item">
            <IconButton onClick={onClick} style={{ color: "black" }}>
              {icon}
            </IconButton>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarIcon;
