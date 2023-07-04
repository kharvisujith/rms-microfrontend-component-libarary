import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid,GridRenderCellParams } from "@mui/x-data-grid";
import "./JobsTable.style.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface IJobsTableRows{
  id:number,
  jobs_title:string,
  priority:string,
  client:string,
  experience:number,
  posted_date:string,
  vacancies:number,
  location:string,
  associated_candidates:number,
  contact_person:string,
  status:string,
}
export interface IJobsTableColumns{
  field: string,
  headerName: string,
  width?: number,
  renderHeader?:()=>{},
  renderCell?:(value:GridRenderCellParams)=>{},
  headerClassName?:string,
  colSpan?:number,
  cellClassName?:string,
  align?:string,
  headerAlign?:string,
  flex?:number,
  type?:string,
  getActions?:(params:any)=>{},
  sortable?:boolean
}
export interface IJobsTableProps {
  headrows: IJobsTableRows[];
  headercolumn: IJobsTableColumns[];
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  rowsHeightSize?: number;
  columnHeaderHeightSize?: number;
  handleRowClick?:() => void;
}

const  JobsTable = ({
  headrows,
  headercolumn,
  style={},
  onClick,
  className="",
  rowsHeightSize=40,
  columnHeaderHeightSize=50,
  handleRowClick
}: IJobsTableProps) => {


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
          //density="compact"
          columns={columnsWithCustomRender}
          onRowClick={()=>{}}
          
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          disableVirtualization
        />
      </Box>
  );
}

export default JobsTable;