import { Box, Typography, Card, Chip, Avatar } from "@mui/material";
import { useState } from "react";
import "./GeneralInformation.style.scss";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { useAppSelector } from "../../../../../Redux/store/configureStore";
import { IOffers } from "../../../../../Redux/slices/JobSlice";

const GeneralInformation = () => {
  const { candidateInfoDetails } = useAppSelector((state) => state.jobs);

  const [viewOfferDetails, setViewOfferDetails] = useState<boolean>(false);

  const handleViewOfferDetails = () => {
    setViewOfferDetails((prev) => !prev);
  };

  const generalInformation = candidateInfoDetails?.generalInformation;

  return (
    <Box>
      <Box className="main-drawer-general-details-content">
        <Box className="main-drawer-general-details-content-item">
          <Typography variant="subtitle2" sx={{ fontWeight: 520 }}>
            Current Status
          </Typography>
          <Chip
            label={generalInformation?.currentStatus}
            color={
              generalInformation?.currentStatus?.toLowerCase() === "active"
                ? "primary"
                : "default"
            }
            size="small"
            sx={{
              fontSize: "0.7rem",
              padding: "0.1rem",
              height: "1.2rem",
            }}
          />
        </Box>
        <Box className="main-drawer-general-details-content-item">
          <Typography variant="subtitle2" sx={{ fontWeight: 520 }}>
            Client
          </Typography>
          <Typography variant="caption">
            {generalInformation?.client}
          </Typography>
        </Box>
        <Box className="main-drawer-general-details-content-item">
          <Typography sx={{ fontWeight: 520 }}>Stage</Typography>
          <Typography variant="caption">{generalInformation?.stage}</Typography>
        </Box>
        <Box className="main-drawer-general-details-content-item">
          <Typography sx={{ fontWeight: 520 }}>No. of Offers</Typography>
          {generalInformation?.offers?.length ? (
            <Box>
              <Typography variant="caption" sx={{ marginRight: "0.5rem" }}>
                {generalInformation.offers.length}
              </Typography>
              <Typography
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#1976d2",
                }}
                variant="caption"
                onClick={handleViewOfferDetails}
              >
                {viewOfferDetails ? "Close Details" : "View Details"}
              </Typography>
            </Box>
          ) : null}
        </Box>
        <Box className="main-drawer-general-details-content-item">
          <Typography sx={{ fontWeight: 520 }}>Assignee</Typography>
          <Box sx={{ display: "flex", gap: "0.2rem", alignItems: "center" }}>
            <Avatar
              alt={generalInformation?.assignee?.[0]}
              src=""
              sx={{ width: 20, height: 20, fontSize: "0.6rem" }}
            />
            <Typography variant="caption">
              {generalInformation?.assignee}
            </Typography>
          </Box>
        </Box>
        <Box className="main-drawer-general-details-content-item">
          <Typography variant="subtitle2" sx={{ fontWeight: 520 }}>
            Notice Period
          </Typography>
          <Typography variant="caption">
            {generalInformation?.noticePeriod}
          </Typography>
        </Box>
      </Box>
      <Box>
        {viewOfferDetails &&
          generalInformation?.offers?.map((cur: IOffers, index: number) => (
            <Card
              key={index}
              className="main-drawer-general-details-offers-card"
            >
              <Box className="main-drawer-general-details-offers-card-content">
                <Box className="main-drawer-general-details-offers-card-item">
                  <CardTravelIcon
                    color="primary"
                    sx={{ fontSize: "15px", marginRight: "0.5rem" }}
                  />
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 520 }}>
                    {cur.companyName}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 520 }}>
                    {`Offered CTC: ${cur.offeredCtc}`}
                  </Typography>
                </Box>
              </Box>
              <Box className="main-drawer-general-details-offers-card-item">
                <DateRangeIcon
                  color="primary"
                  sx={{ fontSize: "15px", marginRight: "0.5rem" }}
                />
                <Typography sx={{ fontSize: "0.6rem" }}>
                  {cur.joiningBy}
                </Typography>
              </Box>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default GeneralInformation;
