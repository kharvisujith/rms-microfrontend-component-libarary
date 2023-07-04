import React from "react";
import {
  render,
  fireEvent,
  getAllByLabelText,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTablePagination from "./CustomTablePagination";

describe("Table Pagination", () => {
  it("renders the Table Pagination properly", async () => {
    const handleChangePage = jest.fn();
    const hanleChangeRowsPerPage = jest.fn();

    const { getByLabelText, getByText, getByRole } = render(
      <CustomTablePagination
        count={100}
        page={1}
        rowsPerPage={10}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={hanleChangeRowsPerPage}
      />
    );
    await waitFor(() => {
      expect(getByText(/Rows per page/i)).toBeInTheDocument();
      expect(
        getByRole("button", { name: /previous page/i })
      ).toBeInTheDocument();
      expect(getByRole("button", { name: /next page/i })).toBeInTheDocument();
    });
  });

  it("should call handleChangePage when the page is cahnged", async () => {
    const handleChangePage = jest.fn();
    const hanleChangeRowsPerPage = jest.fn();

    const { getByLabelText, getByText, getByRole } = render(
      <CustomTablePagination
        count={100}
        page={1}
        rowsPerPage={10}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={hanleChangeRowsPerPage}
      />
    );

    await waitFor(() => {
      fireEvent.click(getByRole("button", { name: /next page/i }));
      expect(handleChangePage).toHaveBeenCalledWith(expect.anything(), 2);
    });

    await waitFor(() => {
      fireEvent.click(getByRole("button", { name: /previous page/i }));
      expect(handleChangePage).toHaveBeenCalledWith(expect.anything(), 0);
    });
  });

  it("should callhandleChangeRowsPerPage when rows per page is changed", async () => {
    const handleChangePage = jest.fn();
    const handleChangeRowsPerPage = jest.fn();

    const { getByLabelText, getByText, getByRole } = render(
      <CustomTablePagination
        count={100}
        page={1}
        rowsPerPage={10}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );

    const setEle = getByText("10");
    fireEvent.mouseDown(setEle);
    const optionElement = await waitFor(() => getByText("25"));
    fireEvent.click(optionElement);
    expect(handleChangeRowsPerPage).toBeCalled();
  });
});
