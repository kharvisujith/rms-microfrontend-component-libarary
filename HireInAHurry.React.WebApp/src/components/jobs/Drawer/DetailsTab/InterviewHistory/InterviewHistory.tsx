import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { table } from "console";
import React, { useEffect, useState } from "react";
import "./InterviewHistory.style.scss";
import { IInterviewHistory } from "../../../../../Redux/slices/JobSlice";
import { useAppSelector } from "../../../../../Redux/store/configureStore";

const InterviewHistoryTableColumn = [
  "Job ID - Title",
  "Result",
  "Date",
  "Pipeline Stage",
];

const InterviewHistoryTableData = [
  {
    jobId: "S25",
    jobTitle: "Java Developer",
    result: "selected",
    date: "May 21, 2022",
    pipelineStage: "Technical Round",
  },
  {
    jobId: "S25",
    jobTitle: "Java Developer",
    result: "Rejected",
    date: "May 21, 2022",
    pipelineStage: "Technical Round",
  },
];

const InterviewHistory = () => {
  const { candidateInfoDetails } = useAppSelector((state) => state.jobs);
  const interviewHistory = candidateInfoDetails?.interviewHistory;

  return (
    <>
      <Box className="main-drawer-interview-histroy-table-container">
        <Table>
          <TableHead>
            <TableRow>
              {InterviewHistoryTableColumn.map(
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
            {interviewHistory?.map((row: IInterviewHistory, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    sx={{ height: "1rem" }}
                  >{`${row.jobCode} - ${row.jobTitle}`}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.result}
                      size="small"
                      sx={{ fontSize: "0.6rem", height: "1rem" }}
                      color={
                        row.result.toLowerCase() === "selected"
                          ? "success"
                          : row.result.toLowerCase() === "rejected"
                          ? "error"
                          : "default"
                      }
                    />
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.pipelineStage}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default InterviewHistory;
