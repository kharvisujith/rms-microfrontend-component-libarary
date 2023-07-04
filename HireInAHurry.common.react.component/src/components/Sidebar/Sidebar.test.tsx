import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Sidebar, { SidebarProp } from "./Sidebar";

describe("Sidebar", () => {
  const sidebarItems: SidebarProp["sidebarItems"] = [
    {
      icon: <svg />,
      label: "Home",
    },
    {
      icon: <svg />,
      label: "About",
    },
    {
      icon: <svg />,
      label: "Contact",
    },
  ];

  const handleOnClickMock = jest.fn();

  it("renders correctly", () => {
    const { container } = render(
      <Sidebar sidebarItems={sidebarItems} handleOnClick={handleOnClickMock} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the sidebar with default props", () => {
    const { container } = render(
      <Sidebar sidebarItems={sidebarItems} handleOnClick={handleOnClickMock} />
    );

    expect(container.querySelector(".common-sidebar")).toBeInTheDocument();

    expect(container.querySelectorAll(".common-sidebar-icon")).toHaveLength(3);

    expect(
      container.querySelectorAll(".common-sidebar-icon")[1]
    ).toBeInTheDocument();
  });

  it("calls handleOnClick when a sidebar item is clicked", () => {
    const { container } = render(
      <Sidebar sidebarItems={sidebarItems} handleOnClick={handleOnClickMock} />
    );

    fireEvent.click(container.querySelectorAll(".common-sidebar-icon")[1]);

    expect(handleOnClickMock).toHaveBeenCalledWith("About");
  });

  it("expands the sidebar when the toggle button is clicked", () => {
    const { container } = render(
      <Sidebar sidebarItems={sidebarItems} handleOnClick={handleOnClickMock} />
    );

    const toggleElement = container.querySelector(".common-sidebar-container-toggle");
    if (toggleElement) {
      fireEvent.click(toggleElement);
    }

    expect(
      container.querySelector(".common-sidebar-container-expanded")
    ).toBeInTheDocument();
  });
});
