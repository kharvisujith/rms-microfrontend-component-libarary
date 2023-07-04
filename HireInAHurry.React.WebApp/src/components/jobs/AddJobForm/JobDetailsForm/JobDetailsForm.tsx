import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/store/configureStore";

import Input from '@mui/material/Input';
import { OutlinedInput } from "@mui/material";

const JobDetailsForm = ({ register, errors }: any) => {
  const dispatch = useAppDispatch();
  const { activeTab,selectedOrganization } = useAppSelector((state) => state.jobs);

  const handleFormNextPageChange = () => {
    dispatch({
      type: "jobs/setActiveTab",
      payload: { activeTab: activeTab + 1 },
    });
   

  };
  return (
    <>
      <div className="main-add-job">
        <label className="main-add-job-label">Job Description</label>
        {/* <input
          className="main-add-job-input"
          {...register("jobDescription", { required: false })}
        /> */}
        <Input  
         aria-label="Job Description"
        className="main-add-job-input" {...register("jobDescription", { required: false })} fullWidth={false}  />
        {errors.jobDescription && <p>This field is required</p>}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Job Title</label>
        <Input
          aria-label="Job Title"
          className="main-add-job-input"
          {...register("jobTitle", { required: false })}
        />
        {errors.jobTitle && <p>This field is required</p>}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Organization</label>
        <Input
          disabled
          value={selectedOrganization}
          aria-label="Organization"
          className="main-add-job-input"
          {...register("organization", { required: false })}
        />
        {errors.organization && <p>This field is required</p>}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Job Identifier</label>
        <Input
          aria-label="Job Identifier"
          className="main-add-job-input"
          {...register("jobIdentifier", { required: false })}
        />
        {errors.jobIdentifier && <p>This field is required</p>}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Experience</label>
        <Input
         inputProps={{ "data-testid": "content-input" }}
          aria-label="Experience"
          className="main-add-job-input"
          {...register("experience", { required: false, min: 0 })}
          type="number"
        />
        {errors.experience && (
          <p>This field is required and should be a positive number</p>
        )}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Number of Positions</label>
        <Input
           aria-label="Number of Positions"
          className="main-add-job-input"
          {...register("numberOfPositions", { required: false, min: 1 })}
          type="number"
        />
        {errors.numberOfPositions && (
          <p>This field is required and should be a positive number</p>
        )}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Job Type</label>
        <Input
          aria-label="Job Type"
          className="main-add-job-input"
          {...register("jobType", { required: false })}
        />
        {errors.jobType && <p>This field is required</p>}
      </div>

      <div className="main-add-budget">
        <label className="main-add-budget-label">Budget</label>
        <div className="main-add-budget-secon">
        <Input
        aria-label="Budget"
          className="main-add-budget-min"
          {...register("budget", { required: false, min: 0 })}
          type="number"
        />
        <Input
          
          className="main-add-budget-max"
          {...register("budget", { required: false, min: 0 })}
          type="number"
        />
        {errors.budget && (
          <p>This field is required and should be a positive number</p>
        )}
        </div>
      </div>

      <div className="main-add-job">
        <label data-testid ="workmode" className="main-add-job-label">Work Mode</label>
        <select
          {...register("workMode", { required: false })}
          className="main-add-job-input"
        >
          <option value="">Select a workMode</option>
          <option value="Fulltime">Fulltime</option>
          <option value="Parttime}">Parttime</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.location && <p>This field is required</p>}
      </div>

      <div className="main-add-job">
        <label className="main-add-job-label">Location</label>
        <Input
          aria-label="Location"
          className="main-add-job-input"
          {...register("location", { required: false })}
        />
        {errors.location && <p>This field is required</p>}
      </div>

      <button role="dialog" aria-label="button-next" className="job-next-btn" onClick={handleFormNextPageChange} >
        Next
      </button>
    </>
  );
};

export default JobDetailsForm;
