import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import "./CandidateJobHistory.style.scss";
import moment from "moment";
import { ICandidateJobHistoryInfoDetails } from "../../../../Redux/slices/JobSlice";
import { useAppSelector } from "../../../../Redux/store/configureStore";

const CandidateHistoryTableColumn = [
  "Client",
  "Job ID - Title",
  "Last Status",
  "Last Update",
];

const CandidateJobHistory = () => {
  const { candidateJobHistoryInfoDetails } = useAppSelector(
    (state) => state.jobs
  );
  //console.log("History page",candidateJobHistoryInfoDetails);
  //const candidateJobHistory = CandidateJobHistoryInfoDetails;
  return (
    <>
      <Box className="main-drawer-candidate-job-histroy-table-container">
        <Table>
          <TableHead>
            <TableRow>
              {CandidateHistoryTableColumn.map(
                (title: string, index: number) => {
                  return (
                    <TableCell key={index} sx={{ fontWeight: 520 }}>
                      {title}
                    </TableCell>
                  );
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateJobHistoryInfoDetails &&
              candidateJobHistoryInfoDetails?.map(
                (row: ICandidateJobHistoryInfoDetails, index: number) => {
                  return (
                    <TableRow>
                      <TableCell>{row.clientName}</TableCell>
                      <TableCell
                        sx={{ height: "1rem" }}
                      >{`${row.jobId} - ${row.jobTitle}`}</TableCell>
                      <TableCell>{row.lastStatus}</TableCell>
                      <TableCell>
                        {row.lastUpdatedDate}&nbsp;
                        {moment
                          .utc(row.lastUpdatedDate)
                          .local()
                          .startOf("seconds")
                          .fromNow()}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default CandidateJobHistory;
