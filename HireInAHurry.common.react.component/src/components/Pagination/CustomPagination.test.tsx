import CustomPagination from "./CustomPagination";
import {
  render,
  fireEvent,
  waitFor,
  getAllByLabelText,
} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

describe("CustomPagination component", () => {
  it("should render the pagination component properrly", async () => {
    const { container, getByTestId, getByLabelText, getAllByLabelText } =
      render(
        <CustomPagination count={5} page={0} handlePageChange={() => {}} />
      );
    expect(getByTestId(/FirstPageIcon/i)).toBeInTheDocument();
    expect(getByTestId(/NavigateNextIcon/i)).toBeInTheDocument();
    expect(getByTestId(/NavigateBeforeIcon/i)).toBeInTheDocument();
    expect(getByTestId(/LastPageIcon/i)).toBeInTheDocument();
    const goToPageButtons = getAllByLabelText(/^Go to page \d+$/i);
    expect(goToPageButtons).toHaveLength(5);
  });

  it("should trigger page change event when a page number button is clicked", () => {
    const handlePageChange = jest.fn();
    const { container, getByTestId, getByLabelText, getAllByLabelText } =
      render(
        <CustomPagination
          count={5}
          page={1}
          handlePageChange={handlePageChange}
        />
      );
    const goToPageButtons = getByLabelText(/Go to page 2/i);
    fireEvent.click(goToPageButtons);
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 2);

    const goToPage = getByLabelText(/Go to page 5/i);
    fireEvent.click(goToPage);
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 5);
  });

  it("should trigger page change event when a page number button is clicked", () => {
    const handlePageChange = jest.fn();
    const { container, getByTestId, getByLabelText, getAllByLabelText } =
      render(
        <CustomPagination
          count={5}
          page={1}
          handlePageChange={handlePageChange}
        />
      );
    const goToPageButtons = getByLabelText(/Go to page 2/i);
    fireEvent.click(goToPageButtons);
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 2);

    const goToPage = getByLabelText(/Go to page 5/i);
    fireEvent.click(goToPage);
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 5);
  });

  it('should trigger the page change event when "Next Page" button is clicked', () => {
    const handlePageChange = jest.fn();
    const { getByTestId } = render(
      <CustomPagination
        count={5}
        page={2}
        handlePageChange={handlePageChange}
      />
    );
    fireEvent.click(getByTestId(/NavigateNextIcon/i));
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 3);
  });

  it('should trigger the page change event when "Previous Page" button is clicked', () => {
    const handlePageChange = jest.fn();
    const { getByTestId } = render(
      <CustomPagination
        count={5}
        page={2}
        handlePageChange={handlePageChange}
      />
    );

    fireEvent.click(getByTestId(/NavigateBeforeIcon/i));
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 1);
  });

  it('should trigger the page change event when "Last Page" button is clicked', () => {
    const handlePageChange = jest.fn();
    const { getByTestId } = render(
      <CustomPagination
        count={5}
        page={2}
        handlePageChange={handlePageChange}
      />
    );

    fireEvent.click(getByTestId(/LastPageIcon/i));
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 5);
  });

  it('should trigger the page change event when "First Page" button is clicked', () => {
    const handlePageChange = jest.fn();
    const { getByTestId } = render(
      <CustomPagination
        count={5}
        page={2}
        handlePageChange={handlePageChange}
      />
    );

    fireEvent.click(getByTestId(/FirstPageIcon/i));
    expect(handlePageChange).toHaveBeenCalledWith(expect.anything(), 1);
  });
});
