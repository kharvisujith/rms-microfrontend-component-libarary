import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormTabs from "./FormTabs";
import "@testing-library/jest-dom";

describe("AddJobTabs", () => {
  // const tabsData: ITabsData[] = [
  //   {
  //     label: "Tab 1",
  //     content: <div>Content for Tab 1</div>,
  //   },
  //   {
  //     label: "Tab 2",
  //     content: <div>Content for Tab 2</div>,
  //   },
  // ];
  const tabsLabel: string[] = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const formComponent = <div>this is a form component</div>;

  it("renders the tabs with correct labels", () => {
    const { getByText } = render(
      <FormTabs
        tabsLabel={tabsLabel}
        activeTab={0}
        onTabClick={() => {}}
        formComponent={<div>this is form component</div>}
      />
    );

    tabsLabel.forEach((label) => {
      const tabLabel = getByText(label);
      expect(tabLabel).toBeInTheDocument();
    });
  });

  it("displays the content of the active tab", () => {
    const activeTab = 1;

    const { getByText } = render(
      <FormTabs
        tabsLabel={tabsLabel}
        formComponent={formComponent}
        activeTab={activeTab}
        onTabClick={() => {}}
      />
    );

    const activeTabContent = getByText("this is a form component");
    expect(activeTabContent).toBeInTheDocument();
  });

  it("calls the onTabClick function when a tab is clicked", () => {
    const onTabClick = jest.fn();
    const { getByText } = render(
      <FormTabs tabsLabel={tabsLabel} activeTab={0} onTabClick={onTabClick} />
    );

    const tab2 = getByText("Tab 2");
    fireEvent.click(tab2);

    expect(onTabClick).toHaveBeenCalledWith(1);
  });
});
