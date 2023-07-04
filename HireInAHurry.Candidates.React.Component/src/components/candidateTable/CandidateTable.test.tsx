import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { candidateTableData } from "../../data/data";
import CandidateTable from "./CandidateTable";

const rowData = [
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
];

describe("Jobs Table Component ", () => {
  it("renders without errors", () => {
    render(
      <CandidateTable
        headrows={rowData}
        headercolumn={candidateTableData.columnData}
      />
    );

    expect(screen.getByTestId("jobs-table")).toBeInTheDocument();
  });

  it("displays correct number of column headers", () => {
    render(
      <CandidateTable
        headrows={rowData}
        headercolumn={candidateTableData.columnData}
      />
    );
    const headerCells = screen.getAllByRole("columnheader");

    expect(headerCells.length).toBe(candidateTableData.columnData.length);

    expect(screen.getByText("Candidate")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Notice Period")).toBeInTheDocument();
  });

  it("displays correct number of rows", () => {
    const { getAllByRole } = render(
      <CandidateTable
        headrows={rowData}
        headercolumn={candidateTableData.columnData}
      />
    );
    const rows = getAllByRole("row");

    expect(rows.length - 1).toBe(rowData.length);
  });
});
