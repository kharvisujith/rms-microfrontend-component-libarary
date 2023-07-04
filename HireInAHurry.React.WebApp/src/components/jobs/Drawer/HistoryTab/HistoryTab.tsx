import { Box } from "@mui/system";
import { JobsDrawerCard } from "@sinnamkushwah/hireinahurry.jobs.react.component";
import CandidateJobHistory from "./CandidateJobHistoryDetails"; 

const HistoryTab = () => {
  return (
    <>
      <Box className="main-drawer-tabs-content">
        <JobsDrawerCard title={"Candidate History"}>
          <CandidateJobHistory/>
        </JobsDrawerCard>
      </Box>
    </>
  );
};

export default HistoryTab;
