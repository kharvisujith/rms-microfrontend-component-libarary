import { Box } from "@mui/system";
import React from "react";
// import JobsDrawerCard from "../DrawerCardComponent/DrawerCardComponent";
import { JobsDrawerCard } from "@sinnamkushwah/hireinahurry.jobs.react.component";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import InterviewHistory from "./InterviewHistory/InterviewHistory";
import AddNotes from "./Notes/AddNotes";
import "../InfoDrawer.style.scss";
import Notes from "./Notes/Notes";

const DetailsTab = () => {
  return (
    <>
      <Box className="main-drawer-tabs-content">
        <JobsDrawerCard title={"General Information"}>
          <GeneralInformation />
        </JobsDrawerCard>
        <JobsDrawerCard title={"Interview History"}>
          <InterviewHistory />
        </JobsDrawerCard>
        <JobsDrawerCard title={"Notes"}>
          <Box className="main-drawer-tabs-content-notes">
            <Notes />
          </Box>
          <AddNotes />
        </JobsDrawerCard>
      </Box>
    </>
  );
};

export default DetailsTab;
