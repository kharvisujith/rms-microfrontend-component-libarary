import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SxProps } from "@mui/system";
import "./CustomSelect.style.scss";

export interface IselectOptions {
  label: string;
  value: string;
}
export interface ISelectProps {
  options: IselectOptions[];
  selectedValue: string;
  onChange: (event: SelectChangeEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
}

const CustomSelect = ({
  options,
  selectedValue,
  onChange,
  className = "",
  style,
  sx,
}: ISelectProps) => {
  return (
    <Select
      value={selectedValue}
      onChange={onChange}
      className={`common-select-input ${className}`}
      style={style}
      sx={{
        height: "1.8rem",
        fontSize: "0.8rem",
        ...sx,
      }}
      data-testid="select"
    >
      {options.map((option: IselectOptions, index: number) => (
        <MenuItem key={index} value={option.value} sx={{ fontSize: "0.8rem" }}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
