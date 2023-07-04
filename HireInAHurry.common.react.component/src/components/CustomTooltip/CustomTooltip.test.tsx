import React from "react";
import ReactDOM from "react-dom";
import userEvent from "@testing-library/user-event";
import {
  render,
  fireEvent,
  getByText,
  getByRole,
  screen,
  queryByText,
  findByRole,
  waitFor,
} from "@testing-library/react";
import CustomTooltip from "./CustomTooltip";
import "@testing-library/jest-dom";
import { exact } from "prop-types";
import { tooltip } from "./CustomTooltip.stories";

// describe("CustomTooltip", () => {
//   it("should render the tooltip with the provided title", () => {
//     const title = "TooltipContent";
//     const { getByText } = render(
//       <CustomTooltip title={title}>
//         <button>HoverMe</button>
//       </CustomTooltip>
//     );

//     const tooltipElement = getByText(/HoverMe/i);
//     expect(tooltipElement).toBeInTheDocument();
//   });

describe("CustomTooltip Hover", () => {
  it("should render the tooltip with the provide hover text", async () => {
    const title = "TooltipContent";
    const { getByText, queryByText, getByRole } = render(
      <CustomTooltip title={title}>
        <button>HoverMe</button>
      </CustomTooltip>
    );
    const hoverElement = screen.getByText(/HoverMe/i);

    expect(screen.queryByText(/TooltipContent/i)).toBeNull();
    userEvent.hover(hoverElement);
    await waitFor(() => {
      const tooltipElement = screen.getByText(title);
      expect(tooltipElement).toBeInTheDocument();
    });
    userEvent.unhover(hoverElement);

    await waitFor(() => {
      const tooltipElement = screen.queryByText(title);
      expect(tooltipElement).not.toBeInTheDocument();
    });
  });
});
