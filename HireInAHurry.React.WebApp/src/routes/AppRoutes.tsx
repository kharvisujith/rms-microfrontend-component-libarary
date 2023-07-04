import { Routes, Route, Navigate } from "react-router-dom";
import Jobs from "../pages/jobs/Home/JobsHome";
import Candidates from "../pages/candidates/Candidates";
import AddJobs from "../pages/jobs/addjob/AddJobs";
import HiringPipeline from "../pages/jobs/HiringPipeline/HiringPipeline";
import DrawerOpen from "../components/jobs/Drawer/DrawerOpen";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/addjob" element={<AddJobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/hiring-pipeline/:id" element={<HiringPipeline />} />
        
        <Route path="/drawer" element={<DrawerOpen />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
