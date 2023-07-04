import React from "react";
import { Tooltip, Button } from "@mui/material";

export interface CustomTooltipProps {
  children: React.ReactElement;
  title: string;
  arrow?: boolean;
  followCursor?: boolean;
}

const CustomTooltip = ({
  children,
  title,
  arrow,
  followCursor,
}: CustomTooltipProps) => {
  return (
    <Tooltip title={title} arrow={arrow} followCursor={followCursor}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
