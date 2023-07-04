import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";
import { AccountCircle } from "@mui/icons-material";
// import logo from "../../assets/recruitrmslogo.png";

describe("Navbar", () => {
  const companyName = "Hire In A Hurry";
  const title = "Requisition Tracker";

  it("renders the navbar with the provided props", () => {
    render(<Navbar companyName={companyName} title={title} />);

    const navbarCompany = screen.getByText(companyName);
    const navbarTitle = screen.getByText(title);
    const navbarLogo = screen.getByAltText("logo");
    const navbarLink = screen.getByRole("button");

    expect(navbarCompany).toBeInTheDocument();
    expect(navbarTitle).toBeInTheDocument();
    // expect(navbarLogo).toBeInTheDocument;
    expect(navbarLink).toBeInTheDocument();
  });

  it("calls the onClick function when the navbar title is clicked", () => {
    const onClick = jest.fn();
    render(
      <Navbar companyName={companyName} title={title} onClick={onClick} />
    );

    const navbarTitle = screen.getByText(title);
    fireEvent.click(navbarTitle);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls the onClick function when the link icon is clicked", () => {
    render(<Navbar companyName={companyName} title={title} />);

    const navbarLink = screen.getByRole("button");
    fireEvent.click(navbarLink);

    // expect(links[0].onClick).toHaveBeenCalledTimes(1);
  });
});
