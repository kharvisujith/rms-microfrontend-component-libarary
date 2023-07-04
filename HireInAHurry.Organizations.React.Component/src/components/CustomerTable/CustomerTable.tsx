import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./Customer_table.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import "../../common/common.style.scss";

export interface Iheadrows {
  id: number;
  customers: string;
  vcperson: string;
  contactperson: string;
  contactmail: string;
  contactno: string;
  status: string;
  action: string;
}

export interface Iheadercolumn {
  field: string;
  headerName: string;
  flex: number;
}

export interface ICustomerTableProps {
  headrows: Iheadrows[];
  headercolumn: Iheadercolumn[];
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  rowsHeightSize?: number;
  columnHeaderHeightSize?: number;
  handleRowClick?: () => void;
}

export default function CustomerTable({
  headrows,
  headercolumn,
  style,
  onClick,
  className,
  rowsHeightSize,
  columnHeaderHeightSize,
  handleRowClick,
}: ICustomerTableProps) {
  const getColorCell = (params: any) => (
    <div
      style={{
        color: "#0570E7",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {params.value}
    </div>
  );

  const createIconCell = () => (
    <div
      style={{
        color: "#0570E7",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MoreVertIcon />
    </div>
  );

  const createButtonCell = (params: any) => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Chip
          label={params.value}
          size="small"
          color={params.value == "active" ? "success" : "error"}
        />
      </div>
    );
  };

  const columnsWithCustomRender = headercolumn.map((column: any) => {
    if (column.field === "customers") {
      return {
        ...column,
        renderCell: (params: any) => getColorCell(params),
      };
    }
    if (column.field == "action") {
      return {
        ...column,
        renderCell: () => createIconCell(),
      };
    }
    if (column.field == "status") {
      return {
        ...column,
        renderCell: (params: any) => createButtonCell(params),
      };
    }
    return column;
  });

  const columnsWithCustomIconRender = headercolumn.map((column: any) => {
    if (column.field === "col1") {
      return {
        ...column,
        renderCell: (params: any) => getColorCell(params),
      };
    }
    return column;
  });
  return (
    <div style={{ maxHeight: 200 }}>
      <Box
        className={`organizations-table-container ${className}`}
        sx={(style = {})}
      >
        <DataGrid
          columnHeaderHeight={columnHeaderHeightSize}
          rowHeight={rowsHeightSize}
          rows={headrows}
          density="compact"
          columns={columnsWithCustomRender}
          onRowClick={handleRowClick}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          sx={{
            boxShadow: 2,
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </Box>
    </div>
  );
}
