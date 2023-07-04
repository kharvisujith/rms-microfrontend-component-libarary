import { JobsTableData } from "./data/jobs/JobsTable";
import config from "../config/config";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import JobsCardData from "./data/jobs/JobsCard";
import { candiateInfoData } from "./data/jobs/candiateInfo";
import { candidateJobHistoryTabData } from "./data/jobs/candidateJobInfo";

if (config.useMockData) {
  const mock = new MockAdapter(axios);
  mock.onGet("/jobs-table-data").reply(200, JobsTableData);
  mock.onGet("/jobs-card-data").reply(200, JobsCardData);
  mock.onGet("/jobs/candiate-info").reply(200, candiateInfoData.detailsTabData);
 mock.onGet("/jobs/candiate-job-history-info").reply(200, candidateJobHistoryTabData);
 //mock.onGet("/jobs/candiate-job-history-info").reply(200, candiateInfoData.candidateJobHistoryTabData);
} 

export const instance = axios.create({
  baseURL: "http://localhost:5001/",
});

export const jobApiRequests = {
  fetchCandidateCardDetails:async ()=>await instance.get("/jobs/candidate-card-details"), 
  fetchCandidateInfo: async () => await instance.get("/jobs/candiate-info"),
  fetchCandidateJobHistoryInfo: async () =>{
    //console.log("Job api calling");
    return await instance.get("/jobs/candiate-job-history-info")
  },
};


// export const fetchCandidateInfo = async () => {
//   return await instance.get("/jobs/candiate-info");
// };
