import { SxProps, TextField } from "@mui/material";
import React from "react";

export interface CustomTextAreaProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
  placeholder?: string;
  rows?: number;
}
const CustomTextArea = ({
  sx,
  className = " ",
  style,
  onChange,
  name,
  value,
  placeholder,
  rows = 5,
}: CustomTextAreaProps) => {
  return (
    <>
      <TextField
        variant="outlined"
        multiline={true}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{ ...sx }}
        style={style}
        className={className}
        InputProps={{
          style: {
            fontSize: "0.8rem",
          },
        }}
        inputProps={{ "data-testid": "content-input" }}
        //data-testid="content-input"
      />
    </>
  );
};
export default CustomTextArea;
