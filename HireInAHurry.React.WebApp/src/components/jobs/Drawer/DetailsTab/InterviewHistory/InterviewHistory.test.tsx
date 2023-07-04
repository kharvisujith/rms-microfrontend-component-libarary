import { render, screen } from "@testing-library/react";
import InterviewHistory from "./InterviewHistory";
import "@testing-library/jest-dom";

describe("InterviewHistory component", () => {
  it("should render interview history table correctly when interview history data is available", () => {
    const mockInterviewHistory = [
      {
        jobCode: "S25",
        jobTitle: "Java Developer",
        result: "selected",
        date: "May 21, 2022",
        pipelineStage: "Technical Round",
      },
      {
        jobCode: "S25",
        jobTitle: "Java Developer",
        result: "Rejected",
        date: "May 21, 2022",
        pipelineStage: "Technical Round",
      },
    ];

    render(<InterviewHistory />);

    const jobTitleCells = screen.getAllByText(/Java Developer/i);
    const resultCells = screen.getAllByTestId("interview-result");
    const dateCells = screen.getAllByTestId("interview-date");
    const pipelineStageCells = screen.getAllByTestId(
      "interview-pipeline-stage"
    );

    expect(jobTitleCells).toHaveLength(mockInterviewHistory.length);

    mockInterviewHistory.forEach((row, index) => {
      expect(jobTitleCells[index]).toBeInTheDocument();

      const resultCell = resultCells[index];
      expect(resultCell).toBeInTheDocument();
      expect(resultCell).toHaveTextContent(row.result);

      const dateCell = dateCells[index];
      expect(dateCell).toBeInTheDocument();
      expect(dateCell).toHaveTextContent(row.date);

      const pipelineStageCell = pipelineStageCells[index];
      expect(pipelineStageCell).toBeInTheDocument();
      expect(pipelineStageCell).toHaveTextContent(row.pipelineStage);
    });
  });

  it("should not render the interview history table when interview history data is not available", () => {
    render(<InterviewHistory />);

    const tableElement = screen.queryByRole("table");
    const tableRows = screen.queryAllByRole("row");

    expect(tableElement).toBeNull();
    expect(tableRows).toHaveLength(0);
  });
});
