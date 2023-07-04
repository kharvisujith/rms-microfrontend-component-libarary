import { useForm, SubmitHandler } from "react-hook-form";
import "./AddJobForm.style.scss";
import {
  Card,
  // TextField,
} from "@sinnamkushwah/hireinahurry.common.react.component";
import { useAppSelector } from "../../../Redux/store/configureStore";
import UploadDocument from "./UploadJdForm/UploadDocument";
import { useNavigate } from "react-router";
import JobDetailsForm from "./JobDetailsForm/JobDetailsForm";
import SkillsAndOtherDetailsForm from "./SkillsAndOtherDetailsFrom/SkillsAndOtherDetailsForm";
import NotesForm from "./NotesForm/NotesForm";
import { IJobInitialState } from "../../../Redux/slices/JobSlice";

interface IFormData {
  jobDescription: string;
  jobTitle: string;
  organization: string;
  jobIdentifier: string;
  experience: number;
  numberOfPositions: number;
  jobType: string;
  budget: number;
  workMode: string;
  location: string;
  expectedJoining: string;
  qualification: string;
  primarySkills: string[];
  secondarySkills: string[];
  jobAssignee: string[];
  notes: string;
  expectedJoiningdemo: string;
}

export default function AddJobForm() {
  const navigate = useNavigate();
  const { activeTab } = useAppSelector((state) => state.jobs);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
    navigate("/jobs");
    console.log("submit data is", data);
  };

  return (
    <form
      className="main-add-job-form-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        {activeTab === 0 && <UploadDocument />}

        {activeTab === 1 && (
          <JobDetailsForm register={register} errors={errors} />
        )}

        {activeTab === 2 && (
          <SkillsAndOtherDetailsForm
            register={register}
            errors={errors}
            control={control}
          />
        )}

        {activeTab === 3 && <NotesForm register={register} />}
      </Card>
    </form>
  );
}
