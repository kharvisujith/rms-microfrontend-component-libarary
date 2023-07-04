import {
  IconButton,
  InputAdornment,
  InputLabel,
  SxProps,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export interface SearchBarProps {
  name: string;
  onChange: () => void;
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
  className?: string;
}

const SearchBar = ({
  onChange,
  placeholder,
  style,
  sx,
  className,
  name,
}: SearchBarProps) => {
  return (
    <>
      <TextField
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        sx={{ ...sx }}
        style={style}
        name={name}
        InputProps={{
          style: {
            height: "1.8rem",
            fontSize: "0.8rem",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchBar;
