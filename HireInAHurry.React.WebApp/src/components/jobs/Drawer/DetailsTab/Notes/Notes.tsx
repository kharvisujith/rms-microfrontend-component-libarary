import { Box, Card, Typography } from "@mui/material";
import "./Notes.style.scss";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../../../../Redux/store/configureStore";
import { INotes } from "../../../../../Redux/slices/JobSlice";

const Notes = () => {
  const { candidateInfoDetails } = useAppSelector((state) => state.jobs);
  const notes = candidateInfoDetails?.notes;
  return (
    <>
      {notes &&
        notes.map((cur: INotes, index: number) => {
          return (
            <Card key={index} className="main-drawer-card-body-notes-card">
              <Box className="main-drawer-card-body-notes-card-content">
                <Box className="main-drawer-card-body-notes-card-content-item">
                  <Box>
                    <Avatar
                      alt={cur.vendorUserName[0]}
                      src={""}
                      sx={{ width: 25, height: 25, fontSize: "1rem" }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: 520 }}>
                      {cur.vendorUserName}
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                      {cur.message}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flexBasis: "85px" }}>
                  <Typography sx={{ fontSize: "0.5rem" }}>
                    {cur.postedDate}
                  </Typography>
                </Box>
              </Box>
            </Card>
          );
        })}
    </>
  );
};

export default Notes;
