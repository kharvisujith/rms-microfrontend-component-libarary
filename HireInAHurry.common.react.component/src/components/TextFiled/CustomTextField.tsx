import { SxProps, TextField } from "@mui/material";
import React from "react";

export interface CustomTextFieldProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
  placeholder?: string;
}

const CustomTextFiled = ({
  sx,
  className = " ",
  style,
  onChange,
  name,
  value,
  placeholder,
}: CustomTextFieldProps) => {
  return (
    <>
      <TextField
        variant="outlined"
        role="textfield"
        name={name}
    
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{ ...sx }}
        style={style}
        className={className}
        inputProps={{  "data-testid":"textfieldname"}}
        InputProps={{
        
          style: {
            height: "1.8rem",
            fontSize: "0.8rem",
          },
        }}
      />
    </>
  );
};
export default CustomTextFiled;
