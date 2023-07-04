import React from "react";
import { render, screen } from "@testing-library/react";
import JobsDrawerCard from "./JobsDrawerCard";
import "@testing-library/jest-dom";

describe("JobsDrawerCard", () => {
  test("renders the title correctly", () => {
    const title = "Test Title";
    render(<JobsDrawerCard title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the children correctly", () => {
    const children = <div>Test Children</div>;
    render(<JobsDrawerCard>{children}</JobsDrawerCard>);
    const childrenElement = screen.getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });
});
