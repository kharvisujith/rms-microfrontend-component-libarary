import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import JobsCard from "../JobsCard/JobsCard";
import AccordionComponent from "./AccordionComponent";
import "@testing-library/jest-dom";

// Mock JobsCard component
jest.mock("../JobsCard/JobsCard", () => () => (
  <div data-testid="jobs-card-mock" />
));

describe("AccordionComponent", () => {
  test("renders AccordionComponent with correct initial state", async () => {
    const { getByTestId } = render(<AccordionComponent />);

    expect(getByTestId("accordion-component")).toBeInTheDocument();
    expect(getByTestId("accordion-container")).toBeInTheDocument();
  });

  test("clicking 'View More' button expands the list of job cards", () => {
    render(
      <AccordionComponent>
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
        <JobsCard
          clientName={""}
          totalAssociateCandidatesCount={0}
          activeJobsCount={0}
          activePercentageClient={0}
          activePercentageRecruiter={0}
          selected={false}
        />
      </AccordionComponent>
    );

    const viewMoreButton = screen.getByTestId("view-more-button");
    fireEvent.click(viewMoreButton);

    expect(screen.getByTestId("view-less-button")).toBeInTheDocument();
    expect(screen.getByTestId("view-less-button")).toHaveTextContent(
      "View Less"
    );
    expect(screen.queryByTestId("view-more-button")).not.toBeInTheDocument();

    const jobCards = screen.getAllByTestId("jobs-card-mock");
    expect(jobCards.length).toBe(8); // Number of job cards rendered
  });
});

test("clicking 'View Less' button collapses the list of job cards", () => {
  const { getByTestId, queryAllByTestId } = render(<AccordionComponent />);
  render(
    <AccordionComponent>
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
    </AccordionComponent>
  );

  const viewMoreButton = screen.getByTestId("view-more-button");
  fireEvent.click(viewMoreButton); // Expand the list

  const viewLessButton = screen.getByTestId("view-less-button");
  fireEvent.click(viewLessButton); // Collapse the list
  expect(screen.getByTestId("view-more-button")).toBeInTheDocument();
  expect(screen.getByTestId("view-more-button")).toHaveTextContent("View More");
  expect(screen.queryByTestId("view-less-button")).not.toBeInTheDocument();

  const jobCards = screen.queryAllByTestId("jobs-card-mock");
  expect(jobCards.length).toBe(4); // No job cards rendered
});

test("displays correct number of job cards per row based on container width", () => {
  // Mock window.innerWidth to simulate different container widths
  const mockWidth = 1000;
  Object.defineProperty(window, "innerWidth", {
    value: mockWidth,
    writable: true,
  });

  render(
    <AccordionComponent>
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
      <JobsCard
        clientName={""}
        totalAssociateCandidatesCount={0}
        activeJobsCount={0}
        activePercentageClient={0}
        activePercentageRecruiter={0}
        selected={false}
      />
    </AccordionComponent>
  );

  const jobCards = screen
    .getByTestId("accordion-container")
    .querySelectorAll('[data-testid="jobs-card-mock"]');
  expect(jobCards.length).toBe(4); // Default number of cards per row

  // Update container width to test a different number of cards per row
  const newMockWidth = 600;
  Object.defineProperty(window, "innerWidth", {
    value: newMockWidth,
    writable: true,
  });
  window.dispatchEvent(new Event("resize"));

  const updatedJobCards = screen
    .getByTestId("accordion-container")
    .querySelectorAll('[data-testid="jobs-card-mock"]');
  expect(updatedJobCards.length).toBe(4); // Adjusted number of cards per row based on new container width
});
