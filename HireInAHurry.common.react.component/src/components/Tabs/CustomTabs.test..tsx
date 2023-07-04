import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import CustomTabs, { CustomTabsProps } from "./CustomTabs";
import "@testing-library/jest-dom";

describe("CustomTabs", () => {
  const label: { [key: string]: string } = {
    tab1: "Tab 1",
    tab2: "Tab 2",
    tab3: "Tab 3",
  };

  const components: React.ComponentType[] = [
    () => <div>Tab 1 Content</div>,
    () => <div>Tab 2 Content</div>,
    () => <div>Tab 3 Content</div>,
  ];

  const setup = (props?: Partial<CustomTabsProps>) => {
    const defaultProps: CustomTabsProps = {
      label,
      components,
    };
    return render(<CustomTabs {...defaultProps} {...props} />);
  };

  it("renders the correct number of tabs", () => {
    const { getByText } = setup();
    Object.values(label).forEach((tabLabel) => {
      expect(getByText(tabLabel)).toBeInTheDocument();
    });
  });

  it("renders the correct initial tab component", () => {
    const { getByText } = setup();
    expect(getByText("Tab 1 Content")).toBeInTheDocument();
  });

  it("renders the correct tab component based on the selected tab", () => {
    const { getByText } = setup();
    fireEvent.click(getByText("Tab 2"));
    expect(getByText("Tab 2 Content")).toBeInTheDocument();
    fireEvent.click(getByText("Tab 3"));
    expect(getByText("Tab 3 Content")).toBeInTheDocument();
  });

  it("applies the custom color to the tab indicator", () => {
    const color = "red";
    const { container } = setup({ color });
    const tabIndicator = container.querySelector(".MuiTabs-indicator");
    expect(tabIndicator).toHaveStyle(`background-color: ${color}`);
  });

  it("renders scrollable tabs when displayed on a small screen", () => {
    const { container } = setup();
    expect(container.querySelector(".MuiButtonBase-root")).toBeInTheDocument();
  });

  it("does not render scrollable tabs when displayed on a large screen", () => {
    act(() => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event("resize"));
    });

    const { container } = setup();
    const tabsContainer = container.querySelector(".MuiTabs-root");

    expect(tabsContainer).not.toHaveClass("MuiTabScrollButton-root");
  });
});
