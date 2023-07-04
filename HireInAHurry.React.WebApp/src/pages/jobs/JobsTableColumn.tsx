import { GridActionsCellItem, GridCellParams, GridRowParams } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from "@mui/material";

const handleEdit = (id:number) => {
  // Handle the edit action
  console.log(`Editing row with ID ${id}`);
};
const JobsTableColumns = [
  {
    field: "jobs_title",
    headerName: "Jobs Title",
    flex: 0.7,
    minWidth:200,
    cellClassName: "blue-font bold",
    //align:"center",
    //headerAlign: 'center',
      renderCell: (params:GridCellParams) => (
        <div onClick={()=>{console.log(params.row)}}>{params.row?.jobs_title} </div>
        //onClick={(e)=>{console.log('Cell clicked:', e.target?.innerText)}} >{params.value}
      ),
  },
  {
    field: "priority",
    headerName: "Priority",
    //flex: 0.4,
    cellClassName: "black-font bold",
    //align:"center"
  },
  {
    field: "client",
    headerName: "Client",
    //flex: 0.4,
    ///align:"center"
  },
  {
    field: "experience",
    headerName: "Experience",
    //flex: 0.4,
    //align:"center"
  },
  {
    field: "posted_date",
    headerName: "Posted on",
    //flex: 0.5,
    //align:"center"
  },
  {
    field: "vacancies",
    headerName: "Vacancies",
    //flex: 0.4,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    //flex: 0.4,
    //align:"center"
  },
  {
    field: "associated_candidates",
    headerName: "Associated Candidates",
    //flex: 0.7,
    // align: "center",
    headerAlign: "center",
  },
  {
    field: "contact_person",
    headerName: "Contact Person",
    //flex: 0.5,
  },
  {
    field: "status",
    headerName: "Status",
    //flex: 0.4,
    cellClassName: "workflow-step",
    //  align: "center",
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    align: "center",
    headerAlign:'center',
    renderCell: (params:any) => (
      <IconButton aria-label="delete"  onClick={() => handleEdit(params.row)}>
      <EditIcon fontSize="small" />
    </IconButton>
    ),
  },
];

export default JobsTableColumns;
