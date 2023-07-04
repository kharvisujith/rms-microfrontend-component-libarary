import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import "./CandidateTable.style.scss";

export interface ICandidateTableRows {
  candidateName: string;
  email: string;
  contact: string;
  noticePeriod: string;
  location: string;
  date: string;
  associatedJobs: number;
  latestStage: string;
  currentCompany: string;
}
export interface ICandidateTableColumns {
  field: string;
  headerName: string;
  width?: number;
  renderHeader?: () => {};
  renderCell?: (value: GridRenderCellParams) => {};
  headerClassName?: string;
  colSpan?: number;
  cellClassName?: string;
  align?: string;
  headerAlign?: string;
  flex?: number;
  type?: string;
  getActions?: (params: any) => {};
  sortable?: boolean;
}
export interface ICandidateTableProps {
  headrows: ICandidateTableRows[];
  headercolumn: ICandidateTableColumns[];
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  rowsHeightSize?: number;
  columnHeaderHeightSize?: number;
  handleRowClick?: () => void;
}

const CandidateTable = ({
  headrows,
  headercolumn,
  style = {},
  onClick,
  className = "",
  rowsHeightSize = 40,
  columnHeaderHeightSize = 50,
  handleRowClick,
}: ICandidateTableProps) => {
  const columnsWithCustomRender = headercolumn.map((column: any) => {
    return column;
  });

  return (
    <Box
      className={`jobs-table-container ${className}`}
      sx={{}}
      data-testid="jobs-table"
    >
      <DataGrid
        columnHeaderHeight={columnHeaderHeightSize}
        rowHeight={rowsHeightSize}
        rows={headrows}
        columns={columnsWithCustomRender}
        onRowClick={() => {}}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        disableVirtualization
      />
    </Box>
  );
};

export default CandidateTable;
