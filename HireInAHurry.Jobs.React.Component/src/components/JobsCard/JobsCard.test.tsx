import React from "react";
import { render,screen } from "@testing-library/react";
import JobsCard from "./JobsCard";
import "@testing-library/jest-dom";

describe("Jobs Card Component ", () => {

  test("render the Jobs Card component", () => {

    const { getByTestId } = render(<JobsCard clientName="Augmento" activeJobsCount={10} totalAssociateCandidatesCount={35} activePercentageClient={30} activePercentageRecruiter={10} selected={false}   />);

    expect(getByTestId('jobs-card-container')).toBeInTheDocument();
  });

  test("render the Jobs Card component and check title and total jobs", () => {

    const { getByTestId } = render(<JobsCard clientName="Augmento" activeJobsCount={10} totalAssociateCandidatesCount={35} activePercentageClient={30} activePercentageRecruiter={10} selected={false}   />);

    expect(getByTestId('jobs-card-title').innerHTML).toEqual('Augmento');
    expect(getByTestId('total-jobs').innerHTML).toEqual("10");
  });
  
  test("render the Jobs Card component and check selected or not", async() => {

    const { getByTestId } = render(<JobsCard clientName="Augmento" activeJobsCount={10} totalAssociateCandidatesCount={35} activePercentageClient={30} activePercentageRecruiter={10} selected={true}   />);
    expect(getByTestId('jobs-card-container')).toHaveClass('jobs-card-container selected MuiBox-root css-0');
  });
});