import React from "react";
import CustomSelect from "./CustomSelect";
import {
  render,
  fireEvent,
  waitFor,
  queryByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
describe("Select component", () => {
  it("should render select compoennt properly", async () => {
    const { getByTestId } = render(
      <CustomSelect options={options} onChange={() => {}} selectedValue="" />
    );

    await waitFor(() => {
      const selectElement = getByTestId("select");
      expect(selectElement).toBeInTheDocument();
    });
  });

  it("trigger onChange when an option is selected", async () => {
    const handleChange = jest.fn();
    const { getByTestId, getByRole, getByText } = render(
      <CustomSelect
        options={options}
        onChange={handleChange}
        selectedValue=""
      />
    );
    const selectElement = await waitFor(() => getByRole("button"));
    fireEvent.mouseDown(selectElement);

    const optionElement = await waitFor(() => getByText(/option 1/i));
    fireEvent.click(optionElement);
    expect(handleChange).toHaveBeenCalled();
  });
});
