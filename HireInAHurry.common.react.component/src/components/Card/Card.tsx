import React from "react";
import "./Card.style.scss";
import CardHeader from "./CardHeader/CardHeader";
import { Grid } from "@mui/material";

export interface CardProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card = ({ onClick, className = "", style, children }: CardProps) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`common-card-container ${className}`}
      data-testid= "common-card-container"
    >
      {children}
    </div>
  );
};

export default Card;
