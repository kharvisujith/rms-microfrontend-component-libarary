import { render } from "@testing-library/react";
import CandidateCard from "./CandidateCard";
import React from "react";
import "@testing-library/jest-dom";

describe("CandidateCard", () => {
  it("renders the title and candidate number correctly", () => {
    const title = "Test Candidate";
    const candidateNumber = 123;

    const { getByText } = render(
      <CandidateCard title={title} candidateNumber={candidateNumber} />
    );
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();

    const candidateNumberElement = getByText(candidateNumber.toString());
    expect(candidateNumberElement).toBeInTheDocument();
  });
});
