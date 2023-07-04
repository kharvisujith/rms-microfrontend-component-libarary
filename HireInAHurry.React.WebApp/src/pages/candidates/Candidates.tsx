import { Box, IconButton } from "@mui/material";
import {
  CandidateCard,
  CandidateTable,
} from "@sinnamkushwah/hireinahurry.candidates.react.component";
import "./Candidates.style.scss";
import {
  Card,
  CardHeader,
} from "@sinnamkushwah/hireinahurry.common.react.component";
import { GridCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { candidateDetails } from "../../mock/data/candidates/candidateDetails";
import { useEffect } from "react";
const candidateTableColumns = [
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
];

const handleAddCandidateClick = () => {
  console.log("add candidate clicked");
};
const Candidates = () => {
  useEffect(() => {});
  return (
    <>
      <Box className="main-candidate-home-container">
        <Box className="main-candidate-card-container">
          <CandidateCard title={"Active Candiate"} candidateNumber={50} />
          <CandidateCard title={"Active Candiate"} candidateNumber={50} />
          <CandidateCard title={"Active Candiate"} candidateNumber={50} />
        </Box>

        <Card>
          <CardHeader
            title={"Candidates"}
            className="main-candiadte-table-card-header"
          >
            <IconButton onClick={handleAddCandidateClick}>
              <AddBoxIcon sx={{ color: "#216fe5" }} />
            </IconButton>
          </CardHeader>

          <CandidateTable
            headrows={candidateDetails.candidates}
            headercolumn={candidateTableColumns}
            rowsHeightSize={40}
            columnHeaderHeightSize={50}
          />
        </Card>
      </Box>

      {/* <h1>This candiate is in progess</h1> */}
    </>
  );
};
export default Candidates;
