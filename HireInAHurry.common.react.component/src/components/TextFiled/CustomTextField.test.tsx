import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomTextField from "./CustomTextField";

describe("CustomTextField", () => {
  it("renders the text field with the provided props", () => {
    const name = "Age";
    const value = "";
    const placeholder = "Enter age";
    const handleOnChange = jest.fn();

    render(
      <CustomTextField
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    );
    const textField = screen.getByRole("textfield");
    // expect(textField).toBeInTheDocument();
    const textname = screen.getByTestId("textfieldname") as HTMLInputElement;
    expect(textname.value).toBe("");
  });

  it("calls the handleOnChange function when the input value changes", () => {
    const handleOnChange = jest.fn();

    render(<CustomTextField onChange={handleOnChange} name={""} value={""} />);

    const textField = screen.getByRole("textbox");

    fireEvent.change(textField, { target: { value: "New value" } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
