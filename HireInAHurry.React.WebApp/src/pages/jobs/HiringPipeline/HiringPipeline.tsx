import React, { useState } from "react";
import {
  Headingsection,
  SummaryCard,
} from "@sinnamkushwah/hireinahurry.jobs.react.component";
import {
   CustomTabs
  } from "@sinnamkushwah/hireinahurry.common.react.component";
import { useLocation } from "react-router-dom";
import { Box, Button, Card, Menu, MenuItem } from "@mui/material";
import "./HiringPipeline.style.scss";
import DragandDrop from "./DragandDrop/DragandDrop";

interface DragAndDropProps {
    numColumns: number;
  }

const HiringPipeline = () => {
  const location = useLocation();
  const rowData = location.state;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Active");
  const [numColumns, setNumColumns] = useState(2); // Initial number of columns in DragandDrop

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const labelData = {
    A: "Candidates",
    B: "Job Details",
  };

  const [components, setComponents] = useState<React.ComponentType<any>[]>([
    DragandDrop,
    DragandDrop,
  ]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleTabClick = () => {
    // Add a new column component to the components array
    setComponents([...components, DragandDrop]);

    // Increment the number of columns
    setNumColumns(numColumns + 1);
  };

  return (
    <>
    <Box
    
        style={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
      <Box
        style={{
        //   backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          marginBottom:'1rem',
        //   height: "100vh",
        }}
      >
        <Box
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Headingsection
            NumberofPosition={rowData.vacancies}
            jobTitle={rowData.jobs_title}
            location={rowData.location}
            companyName={rowData.client}
            date={rowData.posted_date}
          />

          <Button
            aria-controls="dropdown-menu"
            onClick={handleClick}
            variant="contained"
            style={{
              width: "fit-content",
              height: "1rem",
              fontSize: "11px",
              backgroundColor: "#9AC9FE",
              marginLeft: "1rem",
              marginTop: "0.3rem",
              color: "black",
              paddingTop: "0.5rem",
            }}
          >
            {selectedOption}
          </Button>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleOptionSelect("Active")}>
              Active
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("Inactive")}>
              Inactive
            </MenuItem>
          </Menu>
        </Box>
        <Box style={{ marginTop: "1rem" }}>
          <SummaryCard
            summary={[
              {
                NewlyApplied: "New Applied",
                JobStatusNumber: 5,
                SummaryColorProps: "#E7C6FF",
              },
              {
                NewlyApplied: "Offered",
                JobStatusNumber: 3,
                SummaryColorProps: "#D8FFC0",
              },
              {
                NewlyApplied: "On Hold",
                JobStatusNumber: 6,
                SummaryColorProps: "#FFFDC1",
              },
              {
                NewlyApplied: "Rejected",
                JobStatusNumber: 4,
                SummaryColorProps: "#FFDFDF",
              },
              {
                NewlyApplied: "Dropped",
                JobStatusNumber: 2,
                SummaryColorProps: "#F0FCFF",
              },
            ]}
          />
        </Box>
      </Box>
      <CustomTabs label={labelData} components={components} onClick={handleTabClick}/>

      </Box>
    </>
  );
};

export default HiringPipeline;
