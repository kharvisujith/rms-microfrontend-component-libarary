import { Box, IconButton } from "@mui/material";
import {
  Card,
  CardHeader,
} from "@sinnamkushwah/hireinahurry.common.react.component";
import {
  AccordionComponent,
  JobsCard,
  JobsTable,
} from "@sinnamkushwah/hireinahurry.jobs.react.component";
// import AddIcon from "@mui/icons-material/Add";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./JobsHome.style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { instance } from "../../../mock";
import { GridCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../../../Redux/store/configureStore";

const Jobs = () => {
  const navigate = useNavigate();
  const handleAddJobClick = () => {
    navigate("/jobs/addjob");
  };
  const [jobsTableData, setJobsTableData] = useState([]);
  const [jobsTableFilteredData, setJobsTableFilteredData] = useState([]);
  const [jobsCardData, setJobsCardData] = useState<any>([]);
  const [selectedClient, setSelectedClient] = useState("All Clients");
  const getTablesData = async () => {
    try {
      const response: AxiosResponse<any> = await instance.get(
        "/jobs-table-data"
      );
      setJobsTableData(response.data);
      setJobsTableFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getJobsCardData = async () => {
    try {
      const response: AxiosResponse<any> = await instance.get(
        "/jobs-card-data"
      );
      const jobsCardDataModified = response.data.map(
        (jobcardData: any, idx: number) => {
          return idx === 0
            ? { ...jobcardData, selected: true }
            : { ...jobcardData, selected: false };
        }
      );
      setJobsCardData(jobsCardDataModified);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobsCardData();
    getTablesData();
  }, []);

  const handleJobNameClick = (id: number, rowData: any) => {
    // Replace '/hiring-pipeline' with the actual route of the hiring pipeline page
    navigate(`/hiring-pipeline/${id}`,{
      state:rowData}
    );
  };
  //-----//
  const columns = [
    {
      field: "jobs_title",
      headerName: "Jobs Title",
      minWidth: 200,
      cellClassName: "blue-font bold",
      renderCell: (params: GridCellParams) => (
        <div
          onClick={() => {
            handleJobNameClick(params.row.id,params.row);
          }}
        >
          {params.row?.jobs_title}{" "}
        </div>
      ),
    },
    {
      field: "priority",
      headerName: "Priority",
      minWidth: 50,
      cellClassName: "black-font bold",
    },
    {
      field: "client",
      headerName: "Client",
      minWidth: 50,
    },
    {
      field: "experience",
      headerName: "Experience",
      minWidth: 70,
      align: "center",
    },
    {
      field: "posted_date",
      headerName: "Posted on",
      minWidth: 120,
      align: "center",
    },
    {
      field: "vacancies",
      headerName: "Vacancies",
      minWidth: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 50,
    },
    {
      field: "associated_candidates",
      headerName: "Associated Candidates",
      minWidth: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "contact_person",
      headerName: "Contact Person",
      minWidth: 160,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 50,
      cellClassName: "workflow-step",
    },
    {
      field: "actions",
      headerName: "Actions",
      cellClassName: "workflow-step",
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params: any) => (
        <IconButton aria-label="delete" onClick={() => console.log(params.row)}>
          <EditIcon fontSize="small" />
        </IconButton>
      ),
    },
  ];
  //-----//

  const dispatch = useAppDispatch();
  const handleSelectedOrganization = (org:string) => {
    dispatch({
      type: "jobs/setOrganization",
      payload: { organization: org },
    });
  };

  const handleActiveCardSelection = (id: number) => {
    const modifiedActiveCardSelectedValue = jobsCardData.map(
      (jobCard: any, index: number) => {
        if (index === id) {
          setSelectedClient(jobCard.clientName);
          handleSelectedOrganization(jobCard.clientName);
        }
        return index === id
          ? { ...jobCard, selected: true }
          : { ...jobCard, selected: false };
      }
    );
    setJobsCardData(modifiedActiveCardSelectedValue);
  };
  const filterClientSpecificData = (selectedClient: string) => {
    const filteredTableData = jobsTableData.filter((data: any) => {
      return data.client === selectedClient;
    });
    setJobsTableFilteredData(filteredTableData);
  };
  useEffect(() => {
    if (selectedClient !== "All Clients") {
      filterClientSpecificData(selectedClient);
    } else {
      getTablesData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedClient]);
  return (
    <>
      <AccordionComponent>
        {jobsCardData.map((JobsCardData: any, index: number) => {
          return (
            <JobsCard
              key={index}
              clientName={JobsCardData.clientName}
              totalAssociateCandidatesCount={
                JobsCardData.totalAssociateCandidatesCount
              }
              activeJobsCount={JobsCardData.activeJobsCount}
              activePercentageClient={JobsCardData.activePercentageClient}
              activePercentageRecruiter={JobsCardData.activePercentageRecruiter}
              selected={JobsCardData.selected}
              onClick={() => {
                handleActiveCardSelection(index);
              }}
            />
          );
        })}
      </AccordionComponent>
      <Box className="main-jobs-table-container">
        <Card style={{}}>
          <CardHeader title={"Open Jobs"}>
            {selectedClient !== "All Clients" && (
              <IconButton onClick={handleAddJobClick}>
                <AddBoxIcon sx={{ color: "#216fe5" }} />
              </IconButton>
            )}
          </CardHeader>

          <JobsTable headrows={jobsTableFilteredData} headercolumn={columns} />
        </Card>
      </Box>
    </>
  );
};
export default Jobs;