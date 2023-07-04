import React from "react";
import "./CustomButton.style.scss";
import { Icon } from "@mui/material";

export interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  onSubmit?: () => void;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactElement; 
}

const CustomButton = ({
  label,
  onClick,
  onSubmit,
  className="",
  style,
  icon
  
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      className={`common-button ${className}`}
      style = {style}
    >
      {icon && <Icon>{icon}</Icon>}
      {label}      
    </button>
  );
};

export default CustomButton;
