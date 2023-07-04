import {
  Sidebar,
  Navbar,
} from "@sinnamkushwah/hireinahurry.common.react.component";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import WorkIcon from "@mui/icons-material/Work";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import "./Layout.style.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/recruitrmslogo.png";

const sidebarItems = [
  { icon: <HomeIcon fontSize="large" />, label: "HOME" },
  { icon: <SupervisorAccountIcon fontSize="large" />, label: "CANDIDATES" },
  { icon: <CorporateFareIcon fontSize="large" />, label: "ORGANIZATIONS" },
  { icon: <WorkIcon fontSize="large" />, label: "JOBS" },
  { icon: <SettingsRoundedIcon fontSize="large" />, label: "SETTINGS" },
  { icon: <LogoutRoundedIcon fontSize="large" />, label: "LOGOUT" },
];

const Layout = ({ children }: any) => {
  const navigate = useNavigate();
  const handleOnClick = (activeItem: any) => {
    switch (activeItem.toLowerCase()) {
      case "home":
        navigate("/");
        break;
      default:
        navigate(`/${activeItem.toLowerCase()}`);
    }
    // if (activeItem.toLowerCase() === "home") {
    //   navigate("/");
    // } else if (
    //   activeItem.toLowerCase() === "settings" ||
    //   activeItem.toLowerCase() === "logout"
    // ) {
    // } else {
    //   navigate(`/${activeItem.toLowerCase()}`);
    // }
  };

  return (
    <>
      <div className="main-layout">
        <div>
          <Sidebar
            sidebarItems={sidebarItems}
            handleOnClick={(activeItem: any) => handleOnClick(activeItem)}
          />
        </div>
        <div className="main-layout-right-container">
          <div className="main-layout-right-container-navbar">
            <Navbar
              companyName="Hire In A Hurry"
              title="Requisition Tracker"
              logo={logo}
            />
          </div>
          <div className="main-layout-right-container-body">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Layout;
