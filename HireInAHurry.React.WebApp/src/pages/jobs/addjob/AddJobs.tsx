import AddJobForm from "../../../components/jobs/AddJobForm/AddJobForm";
import { AddJobTabs } from "@sinnamkushwah/hireinahurry.common.react.component";
import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Redux/store/configureStore";
import { setActiveTab } from "../../../Redux/slices/JobSlice";

const tabsLabel = [
  "Upload Document",
  "Job Details",
  "Skills & Other Details",
  "Notes",
];

const AddJobs = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.jobs);
  const handleTabChange = (activeTab: number) => {
    dispatch({
      type: "jobs/setActiveTab",
      payload: { activeTab },
    });
  };
  return (
    <div className="addjobs-section" data-testid="add-job-test" >
      <AddJobTabs
        tabsLabel={tabsLabel}
        formComponent={<AddJobForm />}
        activeTab={activeTab}
        onTabClick={(activeTab: number) => {}}
      />
    </div>
  );
};
export default AddJobs;
