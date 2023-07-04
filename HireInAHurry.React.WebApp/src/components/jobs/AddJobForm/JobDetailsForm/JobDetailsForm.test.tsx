import { render, screen, fireEvent, getByRole } from "@testing-library/react";

import JobDetailsForm from "./JobDetailsForm";
import { Provider } from "react-redux";
import { store } from "../../../../Redux/store/configureStore";
import "@testing-library/jest-dom";

describe("JobDetailsForm", () => {
  const register = jest.fn();
  test("renders all form inputs correctly", () => {
    const { getByRole, getByLabelText, getByTestId } = render(
      <Provider store={store}>
        <JobDetailsForm register={() => {}} errors={{}} />
      </Provider>
    );

    expect(screen.getByLabelText("Job Description")).toBeInTheDocument();

    expect(screen.getByLabelText("Job Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Organization")).toBeInTheDocument();
    expect(screen.getByLabelText("Job Identifier")).toBeInTheDocument();
    expect(screen.getByLabelText("Experience")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Positions")).toBeInTheDocument();
    expect(screen.getByLabelText("Job Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Budget")).toBeInTheDocument();
    expect(getByTestId("workmode")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("displays error messages for required fields when Next button is clicked", () => {
    // const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    // const dummyDispatch = jest.fn()
    // useDispatchMock.mockReturnValue(dummyDispatch)
    // const handleFormNextPageChange = jest.fn();
    const mockjestFunction = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: mockjestFunction,
    }));
    const { getByRole, getByLabelText, getByTestId } = render(
      <Provider store={store}>
        <JobDetailsForm register={() => {}} errors={{}} />
      </Provider>
    );
    // const button = screen.getByRole('dialog');
    const ButtonNext = screen.getByRole("dialog", {
      name: /button\-next/i,
    });
    expect(ButtonNext).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
    fireEvent.click(ButtonNext);

    // expect(handleFormNextPageChange).toHaveBeenCalled();
    // expect(mockjestFunction).toHaveBeenCalledTimes(1)
    // expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  test("displays error message for invalid input in Experience field", () => {
    const { getByRole, getByLabelText, getByTestId } = render(
      <Provider store={store}>
        {" "}
        <JobDetailsForm register={() => {}} errors={{}} />
      </Provider>
    );

    const contentInput = getByTestId("content-input");
    fireEvent.change(contentInput, {
      target: { value: "new content" },
    });
    // fireEvent.change(contentInput, { target: { value: -5 } });
    fireEvent.click(screen.getByText("Next"));
  });
});
