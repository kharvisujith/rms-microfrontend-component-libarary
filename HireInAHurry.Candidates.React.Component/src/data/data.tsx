import React from "react";
import {
  GridActionsCellItem,
  GridCellParams,
  GridRenderCellParams,
  GridRowParams,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export const candidateTableData = {
  rowData: [
    {
      id: 1,
      candidateName: "John",
      email: "john123@gmail.com",
      contact: "8787967543",
      noticePeriod: "2 Months",
      location: "Bengaluru",
      date: "24-04-2023",
      associatedJobs: 6,
      latestStage: "Screening Done",
      currentCompany: "TCS",
    },
  ],
  columnData: [
    {
      field: "candidateName",
      headerName: "Candidate",
      minWidth: 150,
      cellClassName: "blue-font bold",
      renderCell: (params: GridCellParams) => (
        <div
          onClick={() => {
            console.log(params.row);
          }}
        >
          {params.row?.candidateName}
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      cellClassName: "black-font bold",
    },
    {
      field: "contact",
      headerName: "Contact Number",
      minWidth: 120,
    },
    {
      field: "noticePeriod",
      headerName: "Notice Period",
      minWidth: 50,
      // align: "center",
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 100,
      // align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 50,
      // align: "center",
      // headerAlign: "center",
    },
    {
      field: "associatedJobs",
      headerName: "Assocated Jobs",
      minWidth: 20,
    },
    {
      field: "latestStage",
      headerName: "Latest Stage",
      minWidth: 100,
      // align: "center",
      //  headerAlign: "center",
    },
    {
      field: "currentCompany",
      headerName: "Current Company",
      minWidth: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      cellClassName: "workflow-step",
      minWidth: 20,
      //  align: "center",
      headerAlign: "center",
      renderCell: (params: any) => (
        <IconButton aria-label="delete" onClick={() => console.log(params.row)}>
          <EditIcon fontSize="small" />
        </IconButton>
      ),
    },
  ],
};
