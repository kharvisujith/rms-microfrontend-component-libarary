import { Avatar, Box, Drawer, Typography } from "@mui/material";
import "./InfoDrawer.style.scss";
import { CustomTabs } from "@sinnamkushwah/hireinahurry.common.react.component";
import DetailsTabs from "./DetailsTab/DetailsTab";
import HistoryTab from "./HistoryTab/HistoryTab";
import { ICandidateInfoDetails } from "../../../Redux/slices/JobSlice";
import { useAppSelector } from "../../../Redux/store/configureStore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const InfoTabLabels = {
  A: "Details",
  B: "History",
};

const InfoTabComponents = [DetailsTabs, HistoryTab];

interface InfoDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

const InfoDrawer = ({ isOpen, handleClose }: InfoDrawerProps) => {
  const { candidateInfoDetails } = useAppSelector((state) => state.jobs);
  console.log("this data was called", candidateInfoDetails);
  //const candidateInfoDetailsSectionInfo=candidateInfoDetails;
  return (
    <>
      <Drawer
        variant="persistent"
        anchor="right"
        open={isOpen}
        onClose={handleClose}
      >
        <Box className="main-drawer-tabs-container">
          <Box className="main-drawer-flex-container">
            <Box>
              <Avatar
                alt="Remy Sharp"
                style={{
                  width: "60px",
                  height: "60px",
                  color: "black",
                  backgroundColor: "orange",
                  fontSize: 30,
                  alignContent: "end",
                  marginRight:"10px"
                }}
              >
                {candidateInfoDetails?.candidateName
                  .trim()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase())
                  .join("")}
              </Avatar>
            </Box>
            <Box>
              <Box>
                <Typography sx={{ fontSize: "1rem" ,color: "navy"}}>
                {candidateInfoDetails?.candidateName}
                </Typography>
              </Box>
              <Box className="main-drawer-container">
                <MailOutlineIcon sx={{ fontSize: "0.7rem" }} />
                <Typography sx={{ fontSize: "0.7rem" }}>
                  {candidateInfoDetails?.email}
                </Typography>
                
              </Box>
              <Box className="main-drawer-container">
                <PhoneIcon sx={{ fontSize: "0.7rem" }} />
                <Typography sx={{ fontSize: "0.7rem" }}>
                  {candidateInfoDetails?.contact}
                </Typography>
              </Box>
              <Box className="main-drawer-container">
                <LocationOnIcon sx={{ fontSize: "0.7rem" }} />
                <Typography sx={{ fontSize: "0.7rem" }}>
                  {candidateInfoDetails?.location}
                </Typography>
              </Box>
            </Box>
          </Box>
          <CustomTabs label={InfoTabLabels} components={InfoTabComponents} />
        </Box>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
