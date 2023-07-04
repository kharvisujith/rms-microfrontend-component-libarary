import { Box, Card, Typography } from "@mui/material";
import React from "react";
import "./CandidateCard.style.scss";

export interface CandiateCardProps {
  title: string;
  candidateNumber: number;
}

const CandidateCard = ({ candidateNumber, title }: CandiateCardProps) => {
  return (
    <>
      <Card className="candidate-card-container">
        <Typography
          sx={{ fontSize: "0.8rem", color: "#6d41ea", fontWeight: 550 }}
        >
          {title}
        </Typography>

        <Box className="candidate-card-container-circle">{candidateNumber}</Box>
      </Card>
    </>
  );
};

export default CandidateCard;
