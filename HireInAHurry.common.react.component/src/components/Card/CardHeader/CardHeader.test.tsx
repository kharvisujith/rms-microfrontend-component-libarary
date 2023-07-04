import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import CardHeader from "./CardHeader";

describe("CardHeader Component ", () => {
  const mockTitle = "Test Title";

  test("render the CardHeader component with title props", () => {
    const { container, getByTestId, getByText } = render(
      <CardHeader title={mockTitle} />
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId("common-card-header-container")).toBeInTheDocument();
    expect(getByText(mockTitle).innerHTML).toEqual(mockTitle);
  });

  test("render the CardHeader component with title icon when provided", () => {
    const mockTitleIcon = <span className="icon" />;
    const { container } = render(
      <CardHeader title={mockTitle} titleIcon={mockTitleIcon} />
    );

    expect(container.querySelector(".common-title-icon")).toBeInTheDocument();
  });
});
