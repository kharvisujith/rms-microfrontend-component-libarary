import React from "react"
import { GridActionsCellItem, GridCellParams, GridRenderCellParams, GridRowParams } from "@mui/x-data-grid"
import JobsTitleCellRenderer from "../components/JobsTable/JobsTitleCellRenderer"
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export const tableData = {
    rowData:[
        {
          id:1,
          jobs_title:"880 - Cloud Architech",
          priority:"HIGH",
          client:"Augmento",
          experience:9,
          posted_date:"24-04-2023",
          vacancies:6,
          location:"Bengaluru",
          associated_candidates:4,
          contact_person:"Srikant",
          status:"active",
        },
        {
          id:2,
          jobs_title:"880 - Cloud Architech",
          priority:"HIGH",
          client:"Augmento",
          experience:9,
          posted_date:"24-04-2023",
          vacancies:6,
          location:"Bengaluru",
          associated_candidates:4,
          contact_person:"Srikant",
          status:"active",
        },
        {
          id:3,
          jobs_title:"880 - Cloud Architech",
          priority:"HIGH",
          client:"Augmento",
          experience:9,
          posted_date:"24-04-2023",
          vacancies:6,
          location:"Bengaluru",
          associated_candidates:4,
          contact_person:"Srikant",
          status:"active",
        },
        {
          id:4,
          jobs_title:"880 - Cloud Architech",
          priority:"HIGH",
          client:"Augmento",
          experience:9,
          posted_date:"24-04-2023",
          vacancies:6,
          location:"Bengaluru",
          associated_candidates:4,
          contact_person:"Srikant",
          status:"active",
        },
        {
          id:5,
          jobs_title:"880 - Cloud Architech",
          priority:"HIGH",
          client:"Augmento",
          experience:9,
          posted_date:"24-04-2023",
          vacancies:6,
          location:"Bengaluru",
          associated_candidates:4,
          contact_person:"Srikant",
          status:"active",
        }
    ],
    columnData: [
      {
        field: "jobs_title",
        headerName: "Jobs Title",
        minWidth:200,
        cellClassName: "blue-font bold",
        renderCell: (params:GridCellParams) => (
          <div onClick={()=>{console.log(params.row)}}>{params.row?.jobs_title} </div>
        ),
      },
      {
        field: "priority",
        headerName: "Priority",
        minWidth:50,
        cellClassName: "black-font bold",
      },
      {
        field: "client",
        headerName: "Client",
        minWidth:50,
      },
      {
        field: "experience",
        headerName: "Experience",
        minWidth:70,
        align:"center"
      },
      {
        field: "posted_date",
        headerName: "Posted on",
        minWidth:120,
        align:"center"
      },
      {
        field: "vacancies",
        headerName: "Vacancies",
        minWidth:50,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "location",
        headerName: "Location",
        minWidth:50,
      },
      {
        field: "associated_candidates",
        headerName: "Associated Candidates",
        minWidth:200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "contact_person",
        headerName: "Contact Person",
        minWidth:160,
      },
      {
        field: "status",
        headerName: "Status",
        minWidth:50,
        cellClassName: "workflow-step",
      },
      {
        field: 'actions',
        headerName: 'Actions',
        cellClassName: "workflow-step",
        minWidth: 120,
        align: "center",
        headerAlign:'center',
        renderCell: (params:any) => (
          <IconButton aria-label="delete"  onClick={() => console.log(params.row)}>
          <EditIcon fontSize="small" />
        </IconButton>
        ),
      },
    ],
}