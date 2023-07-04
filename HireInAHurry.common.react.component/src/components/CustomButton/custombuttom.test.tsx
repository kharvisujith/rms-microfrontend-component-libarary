import React from "react";
import '@testing-library/jest-dom'
import { render, fireEvent, getByText, getByRole ,screen } from "@testing-library/react";
import CustomButton from "./CustomButton";


describe("CustomButton", () => {
  it("renders the button ", () => {
   render(<CustomButton label={""}/>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CustomButton label="Click me" onClick={onClickMock} />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("calls the onSubmit function when the button is submitted", () => {
    const onSubmitMock = jest.fn();
    const { getByText } = render(
      <CustomButton label="Submit" onSubmit={onSubmitMock} />
    );
    const button = getByText("Submit");
    fireEvent.submit(button);
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it("applies the className prop to the button element", () => {
    const { getByText } = render(
      <CustomButton label="Custom Button" className="custom-class" />
    );
    const button = getByText("Custom Button");
    expect(button).toHaveClass("custom-class");
  });

  it("applies the style prop to the button element", () => {
    const style = { backgroundColor: "red" };
    const { getByText } = render(
      <CustomButton label="Styled Button" style={style} />
    );
    const button = getByText("Styled Button");
    expect(button).toHaveStyle(style);
  });
});
