import { Card, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./JobsDrawerCard.style.scss";

const JobsDrawerCard = ({ title, children }: any) => {
  return (
    <>
      <Card className="jobs-drawer-tabs-content-card-wrapper">
        <Box className="jobs-drawer-tabs-content-card-wrapper-title">
          <Typography
            variant="body1"
            //  className="jobs-drawer-tabs-content-card-wrapper-title-content"
            sx={{ fontWeight: 520, textTransform: "capitalize" }}
          >
            {title}
          </Typography>
        </Box>
        <Divider className="jobs-drawer-tabs-content-card-wrapper-divider" />
        <Box className={"jobs-drawer-tabs-content-card-wrapper-body"}>
          {children}
        </Box>
      </Card>
    </>
  );
};

export default JobsDrawerCard;
