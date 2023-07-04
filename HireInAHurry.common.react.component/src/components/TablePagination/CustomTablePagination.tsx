import React from "react";
import TablePagination from "@mui/material/TablePagination";
import { SxProps } from "@mui/system";

export interface TablePaginationProps {
  count: number;
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  rowsPerPage: number;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
}

const CustomTablePagination = ({
  className,
  style,
  sx,
  count,
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}: TablePaginationProps) => {
  return (
    <>
      <TablePagination
        style={style}
        className={className}
        sx={{ ...sx }}
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
export default CustomTablePagination;
