import CustomTextArea from "./CustomTextArea";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("CustomTextArea", () => {
  it("should render textaraea properly", async () => {
    const { getByRole } = render(
      <CustomTextArea name="Notes" value="Test" onChange={() => {}} />
    );
    await waitFor(() => {
      const textareaElement = getByRole("textbox");
      expect(textareaElement).toBeInTheDocument();
    });
  });

  it("should render with the correct initial value", async () => {
    const initialValue = "Hello";
    const { getByRole } = render(
      <CustomTextArea name="Notes" value={initialValue} onChange={() => {}} />
    );
    await waitFor(() => {
      const textareaElement = getByRole("textbox");
      expect(textareaElement).toHaveValue(initialValue);
    });
  });

  it("should trigger onchange event when value changes", async () => {
    const onChange = jest.fn();
    const { getByRole, getByTestId } = render(
      <CustomTextArea name="Notes" value="Test" onChange={onChange} />
    );
    const textareaElement = await waitFor(() => getByTestId("content-input"));
    fireEvent.change(textareaElement, { target: { value: "a" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
