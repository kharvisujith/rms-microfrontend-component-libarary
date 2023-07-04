import React from "react";
import { Divider, Icon, IconButton } from "@mui/material";
import "./Navbar.style.scss";
import NavbarIcon from "./NavbarIcon/NavbarIcon";
import { AccountCircle } from "@mui/icons-material";

export interface NavbarProps {
  companyName: string;
  title: string;
  logo?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  companyName,
  logo,
  title,
  style,
  onClick,
}) => {
  return (
    <>
      <nav className="common-navbar" style={style}>
        <div className="common-navbar-title" onClick={onClick} style={style}>
          {title}
        </div>

        <div className="common-navbar-heading">
          <img
            src={logo}
            alt="logo"
            style={style}
            className="common-navbar-logo"
          />

          <div className="common-navbar-companyname" style={style}>
            {companyName}
          </div>
          <div className="divider" />
          <NavbarIcon
            label={""}
            icon={<AccountCircle />}
            onClick={onClick}
            style={{ color: "black" }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
