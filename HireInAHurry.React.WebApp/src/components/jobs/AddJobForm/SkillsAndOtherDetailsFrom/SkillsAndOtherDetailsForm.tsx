import { Autocomplete, Chip, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/store/configureStore";

const assigneesList = [
  { title: "balaji" },
  { title: "sujith" },
  { title: "raghavendra" },
  { title: "aryanverma" },
  { title: "sinnam" },
  { title: "sneha" },
  { title: "anshu" },
  { title: "rishik" },
  { title: "yash" },
  { title: "rajneesh" },
  { title: "sandeep" },
  { title: "srikanth" },
];

const skillsOptions = [
  { title: "Java" },
  { title: "Python" },
  { title: "OracleDb" },
  { title: "AzureDevops" },
  { title: "Ui React Developer" },
  { title: "Dotnet" },
  { title: "Asp.net Mvc" },
  { title: "Asp .net Core" },
  { title: "Web Api" },
  { title: "Azure Service bus" },
  { title: "Andriod Developer" },
  { title: "Pega" },
  { title: "Ai and Machine Learning" },
];

const expectedJoining: string[] = [
  "1Week",
  "2Week",
  "1Month",
  "45Days",
  "2Months",
  "3Months",
  "other",
];

const SkillsAndOtherDetailsForm = ({ register, errors, control }: any) => {
  const [showDiv, setShowDiv] = useState(false);
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.jobs);
  const handleFormNextPageChange = () => {
    dispatch({
      type: "jobs/setActiveTab",
      payload: { activeTab: activeTab + 1 },
    });
  };
  return (
    <>
      <div className="main-add-job">
        <label aria-label="Expected" className="main-add-job-label">
          Expected Joining
        </label>

        <select
          {...register("expectedJoining")}
          onChange={(e) => setShowDiv(e.target.value === "other")}
          className="main-add-job-input"
        >
          {expectedJoining.map((value: string, index: number) => {
            return (
              <option data-testid={value} key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      {showDiv && (
        <div className="main-add-job-other">
          <Input
            data-testid="expected-input"
            {...register("expectedJoining")}
            className="main-add-job-input-other"
            placeholder="Expected joining Days/Months"
            type="text"
          />
        </div>
      )}
      <div className="main-add-job">
        <label aria-label="Qualification" className="main-add-job-label">
          Qualification
        </label>

        <Input
          {...register("qualification", { required: false })}
          className="main-add-job-input"
          placeholder="B.E/B.Tech/MCA/M.Tech"
          type="text"
        />
      </div>
      <div className="main-add-job">
        <label className="main-add-job-label">Skills</label>
      </div>
      <div className="main-add-job">
        <label className="main-add-job-label">Primary Skills</label>

        <Controller
          control={control}
          name={"primarySkills"}
          defaultValue={[]}
          render={({ field }) => (
            <Autocomplete
              multiple
              id="multiple-primaryskills-tags"
              size="small"
              sx={{ width: "30rem" }}
              options={skillsOptions.map((option) => option.title)}
              value={field.value}
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    size="small"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add Skills"
                  size="small"
                  placeholder="Primary Skills"
                />
              )}
            />
          )}
        />
      </div>
      <div className="main-add-job">
        <label className="main-add-job-label">Seconday Skills</label>

        <Controller
          control={control}
          name={"secondarySkills"}
          defaultValue={[]}
          render={({ field }) => (
            <Autocomplete
              multiple
              id="multiple-secondaryskills-tags"
              size="small"
              sx={{ width: "30rem" }}
              options={skillsOptions.map((option) => option.title)}
              value={field.value}
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    size="small"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add Skills"
                  size="small"
                  placeholder="Secondary Skills"
                />
              )}
            />
          )}
        />
      </div>
      <div className="main-add-job">
        <label className="main-add-job-label">Job Assignee</label>
        <Controller
          control={control}
          name={"jobAssignee"}
          defaultValue={[]}
          render={({ field }) => (
            <Autocomplete
              multiple
              id="multiple-assignee-tags"
              size="small"
              sx={{ width: "30rem" }}
              options={assigneesList.map((option) => option.title)}
              value={field.value}
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    size="small"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add Assignee"
                  size="small"
                  placeholder="Job Assignee"
                />
              )}
            />
          )}
        />
      </div>
      <div className="job-next-btn">
        <label></label>
        <button className="job-next-btn" onClick={handleFormNextPageChange}>
          Next
        </button>
      </div>
    </>
  );
};

export default SkillsAndOtherDetailsForm;
