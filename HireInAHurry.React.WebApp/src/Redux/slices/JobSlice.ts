import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Candidates from "../../pages/candidates/Candidates";
import { jobApiRequests } from "../../mock";
import { candiateInfoData } from "../../mock/data/jobs/candiateInfo";
import { candidateJobHistoryTabData } from "../../mock/data/jobs/candidateJobInfo";

export interface IOffers {
  offerId: string;
  companyName: string;
  joiningBy: string;
  offeredCtc: string;
}
export interface IGeneralInformation {
  currentStatus: string;
  client: string;
  stage: string;
  offers: IOffers[];
  assignee: string;
  noticePeriod: string;
}

export interface IInterviewHistory {
  interviewHistoryId: string;
  jobCode: string;
  jobTitle: string;
  result: string;
  date: string;
  pipelineStage: string;
}

export interface INotes {
  noteId: string;
  vendorUserName: string;
  message: string;
  postedDate: string;
}
export interface ICandidateInfoDetails {
  jobId: string;
  clientId: string;
  candidateName: string;
  candidateId: string;
  email: string;
  contact: string;
  location: string;
  generalInformation: IGeneralInformation;
  interviewHistory: IInterviewHistory[];
  notes: INotes[];
}

export interface ICandidateJobHistoryInfoDetails {
  candidatehistoryId: string;
  clientName: string;
  jobId: string;
  jobTitle: string;
  lastStatus: string;
  lastUpdatedDate: string;
}

export interface IJobInitialState {
  activeTab: number;
  candidateInfoDetails: ICandidateInfoDetails | null;
  candidateJobHistoryInfoDetails: ICandidateJobHistoryInfoDetails[] | null;
  selectedOrganization: string;
}
const initialState: IJobInitialState = {
  activeTab: 0,
  candidateInfoDetails: null,
  candidateJobHistoryInfoDetails: null,
  selectedOrganization: "",
};

export const fetchCandiateInfoDetails = createAsyncThunk(
  "jobs/fetchCandiateInfoDetails",
  async () => {
    try {
      console.log("thunk triggered");
      const response = await jobApiRequests.fetchCandidateInfo();
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  }
);

//Declaring thunk
export const fetchCandidateJobHistoryInfo = createAsyncThunk(
  "jobs/fetchCandidateJobHistoryInfo",
  async () => {
    try {
      console.log("thunk triggered");
      const response = await jobApiRequests.fetchCandidateJobHistoryInfo();
      //console.log("thunk triggered",response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch Job History data");
    }
  }
);

export const fetchCandiateCardDetails = createAsyncThunk(
  "jobs/fetchCandiateCardDetails",
  async () => {
    try {
      console.log("thunk triggered");
      const response = await jobApiRequests.fetchCandidateInfo();
      console.log("CandidateData", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  }
);

export const jobSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {
    setActiveTab: (
      state: IJobInitialState,
      action: PayloadAction<{ activeTab: number }>
    ) => {
      // state.activeTab = action.payload.activeTab;
      return {
        ...state,
        activeTab: action.payload.activeTab,
      };
    },
    setOrganization: (
      state: IJobInitialState,
      action: PayloadAction<{ organization: string }>
    ) => {
      state.selectedOrganization = action.payload.organization;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchCandiateInfoDetails.fulfilled,
      (state: IJobInitialState, action: any) => {
        return {
          ...state,
          candidateInfoDetails: action.payload,
        };
      }
    );

    builder.addCase(
      fetchCandiateInfoDetails.pending,
      (state: IJobInitialState) => {
        //set loader true
      }
    );
    builder.addCase(
      fetchCandiateInfoDetails.rejected,
      (state: IJobInitialState) => {
        // set loader false and toast some error if required
        console.log("response in builder is 3");
      }
    );
    //History handlig here
    builder.addCase(
      fetchCandidateJobHistoryInfo.fulfilled,
      (state: IJobInitialState, action: any) => {
        return {
          ...state,
          candidateJobHistoryInfoDetails: action.payload,
        };
      }
    );

    builder.addCase(
      fetchCandidateJobHistoryInfo.pending,
      (state: IJobInitialState) => {
        //set loader true
      }
    );
    builder.addCase(
      fetchCandidateJobHistoryInfo.rejected,
      (state: IJobInitialState) => {
        // set loader false and toast some error if required
        console.log("response in builder is 3");
      }
    );
  },
});
export const { setActiveTab } = jobSlice.actions;
