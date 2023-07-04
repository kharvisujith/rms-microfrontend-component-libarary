// import AddJobs from "./AddJobs";
// import { Provider } from "react-redux";
import { store } from "../../../Redux/store/configureStore";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJobs from "./AddJobs";
import { Provider } from "react-redux";
import { setActiveTab } from "../../../Redux/slices/JobSlice";

test("finds qualified insurrance policies", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <AddJobs />
      </Provider>
    </BrowserRouter>
  );
  const Element = screen.getByTestId("add-job-test");
  expect(Element).toBeInTheDocument();
});

it("should dispatch setActiveTab action on tab change", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <AddJobs />
      </Provider>
    </BrowserRouter>
  );
  const tab = getByText("Job Details");

  fireEvent.click(tab);

  expect(
    store.dispatch({
      type: "jobs/setActiveTab",
      payload: { activeTab: 1 },
    })
  );
});
