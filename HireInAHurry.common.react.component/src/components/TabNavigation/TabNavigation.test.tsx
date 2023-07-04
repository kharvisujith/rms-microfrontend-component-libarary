import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabNavigation from "./TabNavigation";
import "@testing-library/jest-dom";

const CandidatetabList = ["Talent Pool", "Add Talent", "Talent Shop"];
describe("TabNavigation", () => {
  it("renders the TabNavigation properly", () => {
    const { getByText } = render(
      <TabNavigation
        tabList={CandidatetabList}
        currentTab={"Talent Pool"}
        handleTabChange={() => {}}
      />
    );
    expect(getByText("Talent Pool")).toBeInTheDocument();
    expect(getByText("Add Talent")).toBeInTheDocument();
    expect(getByText("Talent Shop")).toBeInTheDocument();
    expect(getByText("Talent Pool")).toHaveClass(
      "common-tab-navigation-active"
    );
  });

  it("calls onclick function with clicked label when tab is clicked", () => {
    const handleTabChange = jest.fn();

    const { getByText } = render(
      <TabNavigation
        tabList={CandidatetabList}
        currentTab={"Talent Pool"}
        handleTabChange={handleTabChange}
      />
    );
    fireEvent.click(getByText("Talent Pool"));
    expect(handleTabChange).toHaveBeenCalledWith("Talent Pool");
  });
});
