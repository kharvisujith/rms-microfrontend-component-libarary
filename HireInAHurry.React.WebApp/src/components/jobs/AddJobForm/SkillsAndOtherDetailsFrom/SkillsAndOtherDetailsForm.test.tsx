import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SkillsAndOtherDetailsForm from "./SkillsAndOtherDetailsForm";
import "@testing-library/jest-dom";
import { store } from "../../../../Redux/store/configureStore";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { useForm } from "react-hook-form";

const SkillsAndDetails = () => {
  const { control } = useForm();

  return <SkillsAndOtherDetailsForm control={control} register={() => {}} />;
};

describe("SkillsAndOtherDetailsForm", () => {
  it("should render the Expected Joining select with options", () => {
    render(
      <Provider store={store}>
        <SkillsAndDetails />
      </Provider>
    );

    const expectedJoiningSelect = screen.getByLabelText("Expected");

    expect(expectedJoiningSelect).toBeInTheDocument();

    const expectedJoiningOptions = screen.getAllByRole("option");
    expect(expectedJoiningOptions).toHaveLength(7);
  });

  it("should show input field when 'other' option is selected in Expected Joining select", async () => {
    render(
      <Provider store={store}>
        <SkillsAndDetails />
      </Provider>
    );

    const expectedJoiningSelect = screen.getByLabelText("Expected");

    const otherOption = await waitFor(() => screen.getByTestId("other"));
    fireEvent.mouseDown(expectedJoiningSelect);
    fireEvent.click(otherOption);

    const expectedJoiningInput = await waitFor(() =>
      screen.getByTestId("expected-input")
    );
    console.log("expectedJoiningInput", expectedJoiningInput);
    console.log("expectedJoiningSelect", expectedJoiningSelect);

    expect(expectedJoiningInput).toBeInTheDocument();
  });

  //   it("should not show input field when 'other' option is not selected in Expected Joining select", () => {
  //     render(<Provider store={store}><SkillsAndOtherDetailsForm  register={() => {}} control={control} /></Provider>);

  //     const expectedJoiningSelect = screen.getByLabelText("Expected Joining");
  //     const nonOtherOption = screen.getByRole("option", { name: /1Week/i });

  //     // Select a non-'other' option in the Expected Joining select
  //     fireEvent.change(expectedJoiningSelect, { target: { value: nonOtherOption.value } });

  //     const expectedJoiningInput = screen.queryByPlaceholderText("Expected joining Days/Months");

  //     // Assert that the input field for expected joining is not visible
  //     expect(expectedJoiningInput).toBeNull();
  //   });

  //   it("should render the Qualification input field", () => {
  //     render(<Provider store={store}><SkillsAndOtherDetailsForm  register={() => {}} control={control}  /></Provider>);
  //     const qualificationInput = screen.getByPlaceholderText("B.E/B.Tech/MCA/M.Tech");

  //     // Assert that the Qualification input field is rendered
  //     expect(qualificationInput).toBeInTheDocument();
  //   });

  //   it("should render the Primary Skills Autocomplete", () => {
  //     render(<Provider store={store}><SkillsAndOtherDetailsForm  register={() => {}} control={control}  /></Provider>);

  //     const primarySkillsAutocomplete = screen.getByLabelText("Primary Skills");

  //     // Assert that the Primary Skills Autocomplete is rendered
  //     expect(primarySkillsAutocomplete).toBeInTheDocument();
  //   });

  //   it("should render the Secondary Skills Autocomplete", () => {
  //     render(<Provider store={store}><SkillsAndOtherDetailsForm  register={() => {}} control={control} /></Provider>);

  //     const secondarySkillsAutocomplete = screen.getByLabelText("Secondary Skills");

  //     // Assert that the Secondary Skills Autocomplete is rendered
  //     expect(secondarySkillsAutocomplete).toBeInTheDocument();
  //   });

  //   it("should render the Job Assignee Autocomplete", () => {
  //     render(<Provider store={store}><SkillsAndOtherDetailsForm  register={() => {}} control={control} /></Provider>);
  //     const jobAssigneeAutocomplete = screen.getByLabelText("Job Assignee");

  //     // Assert that the Job Assignee Autocomplete is rendered
  //     expect(jobAssigneeAutocomplete).toBeInTheDocument();
  //   });

  //   it("should handle form submission when Next button is clicked", () => {
  //     // Mock dispatch function
  //     const mockDispatch = jest.fn();

  //     // Mock useAppDispatch hook
  //     // jest.mock("../../../../Redux/store/configureStore", () => ({
  //     //   useAppDispatch: () => mockDispatch,
  //     //   useAppSelector: jest.fn(),
  //     // }));

  //     render(<Provider store={store}>  <SkillsAndOtherDetailsForm   register={() => {}} control={control} /> </Provider>);

  //     const nextButton = screen.getByRole("button", { name: /next/i });

  //     // Click the Next button
  //     fireEvent.click(nextButton);

  //     // Assert that the dispatch function was called with the correct action type and payload
  //     // expect(mockDispatch).toHaveBeenCalledWith({
  //     //   type: "jobs/setActiveTab",
  //     //   payload: { activeTab: 1 }, // Assuming the initial activeTab value is 0
  //     // });
  //   });
});
