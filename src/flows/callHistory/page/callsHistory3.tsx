import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const calls = [
  {
    consultantName: "Mr. Smith",
    consultantProfilePicUrl: "https://www.google.com",
    consultantID: "1",
    consultingTopic: "Java",
    consultingDate: "2021-01-01",
    consultingTime: "10:00",
    consultingDuration: 90,
    consultingPrice: 150,
    ratedByMe: true,
    rating: 5,
    review: "Great consultant",
  },
  {
    consultantName: "Ms. Johnson",
    consultantProfilePicUrl: "https://www.google.com",
    consultantID: "2",
    consultingTopic: "Career coaching",
    consultingDate: "2021-01-15",
    consultingTime: "14:00",
    consultingDuration: 120,
    consultingPrice: 300,
    ratedByMe: true,
    rating: 4,
    review: "Very helpful session",
  },
  {
    consultantName: "Dr. Brown",
    consultantProfilePicUrl: "https://www.google.com",
    consultantID: "3",
    consultingTopic: "Nutrition consultation",
    consultingDate: "2021-01-20",
    consultingTime: "09:00",
    consultingDuration: 60,
    consultingPrice: 200,
    ratedByMe: true,
    rating: 5,
    review: "Excellent advice",
  },
  {
    consultantName: "Mr. Davis",
    consultantProfilePicUrl: "https://www.google.com",
    consultantID: "4",
    consultingTopic: "Business strategy",
    consultingDate: "2021-02-01",
    consultingTime: "11:00",
    consultingDuration: 60,
    consultingPrice: 200,
    ratedByMe: true,
    rating: 4,
    review: "Good insights",
  },
];

export const CallsHistoryPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your calls
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here's a list of all your previous calls
      </Typography>
      <List>
        {calls.map((call, index) => (
          <React.Fragment key={call.consultantID}>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => handleExpandClick(index)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={call.consultantName}
                  src={call.consultantProfilePicUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={call.consultingTopic}
                secondary={`Duration: ${Math.floor(
                  call.consultingDuration / 60
                )}h ${call.consultingDuration % 60}m, Cost: $${
                  call.consultingPrice
                }`}
              />
              <IconButton onClick={() => handleExpandClick(index)}>
                {expanded === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItem>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body2">
                  Consultant: {call.consultantName}
                </Typography>
                <Typography variant="body2">
                  Date: {call.consultingDate}
                </Typography>
                <Typography variant="body2">
                  Time: {call.consultingTime}
                </Typography>
                <Typography variant="body2">
                  Duration: {call.consultingDuration} minutes
                </Typography>
                <Typography variant="body2">
                  Price: ${call.consultingPrice}
                </Typography>
                <Typography variant="body2">Rating: {call.rating}</Typography>
                <Typography variant="body2">Review: {call.review}</Typography>
              </Box>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
