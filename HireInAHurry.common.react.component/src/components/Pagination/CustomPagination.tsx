import { Pagination, SxProps } from "@mui/material";
import React from "react";

export interface ICustomPagination {
  count: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
}

const CustomPagination = ({
  count,
  page,
  handlePageChange,
  size = "small",
  className,
  style,
  sx,
}: ICustomPagination) => {
  return (
    <>
      <Pagination
        count={count}
        page={page}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        size={size}
        style={style}
        className={className}
        sx={{ ...sx }}
      />
    </>
  );
};
export default CustomPagination;
