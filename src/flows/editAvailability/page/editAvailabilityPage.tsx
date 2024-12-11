import { Container, Switch, Typography } from "@mui/material";
import React from "react";
import { Calendar } from "../../../common/components/clendar/demo-app";

interface Availability {
  date: Date;
  fromTime: Date;
  toTime: Date;
}

export const EditAvailabilityPage: React.FC = () => {
  const [isThisWeek, setIsThisWeek] = React.useState(true);

  const handleSwitchChange = () => {
    setIsThisWeek(!isThisWeek);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom marginTop={"6vh"}>
        Set Your Availability
      </Typography>
      <div id="switch">
        <Switch
          checked={isThisWeek}
          onChange={handleSwitchChange}
          color="primary"
          inputProps={{ "aria-label": "toggle calendar" }}
        />
        <Typography variant="body1" gutterBottom>
          {isThisWeek ? "This Week" : "General"}
        </Typography>
      </div>
      {isThisWeek ? (
        <Typography variant="body1" gutterBottom>
          Set your availability for this week
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          Set your general availability
        </Typography>
      )}

      <div id="calendar">{isThisWeek ? <Calendar /> : <Calendar />}</div>
    </Container>
  );
};
