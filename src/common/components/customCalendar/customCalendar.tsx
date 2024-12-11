import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import React from "react";
import { useCurrentTopicState } from "../../../flows/topic/data/currentTopicState";
import "./calendar.css";
import { useNavigate } from "react-router-dom";

const CustomCalendar: React.FC = () => {
  const navigate = useNavigate();
  const { availability, metaData, ratings } = useCurrentTopicState();

  const getDayOfWeek = (date: Date): number => {
    return date.getDay();
  };

  const getTimeSlot = (date: Date): number => {
    return date.getHours() * 6 + Math.floor(date.getMinutes() / 10);
  };

  const getBlockStyle = (start: Date, end: Date) => {
    const startDay = getDayOfWeek(start);
    const endDay = getDayOfWeek(end);
    const startSlot = getTimeSlot(start);
    const endSlot = getTimeSlot(end);
    const slotHeight = 40; // height of each time slot
    const slotWidth = 100; // width of each day cell

    const top = startSlot * (slotHeight / 6);
    const left = startDay * slotWidth;
    const height = (endSlot - startSlot) * (slotHeight / 6);
    return {
      position: "absolute" as "absolute",
      backgroundColor: "blue",
      opacity: 0.7,
      borderRadius: "4px",
      top: `${top}px`,
      left: `${left}px`,
      height: `${height}px`,
      width: `${slotWidth - 2}px`, // adjust for borders
    };
  };

  const tableStyles = {
    position: "relative" as "relative",
  };

  const cellStyles = {
    height: 40,
    border: "1px solid rgba(224, 224, 224, 1)",
  };

  const containerStyles = {
    overflowX: "auto" as "auto",
    whiteSpace: "nowrap" as "nowrap",
  };

  const buttonContainerStyles = {
    marginBottom: "10px",
    display: "flex",
    gap: "10px",
  };

  return (
    <Box>
      <Box style={containerStyles} className="calendarContainer">
        <Box style={tableStyles} className="calendarTable">
          {availability.map((block, index) => {
            const startDate = new Date(block.dateOfStart);
            const endDate = new Date(block.dateOfEnd);
            const style = getBlockStyle(startDate, endDate);
            return <Box key={index} style={style} />;
          })}
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <TableCell key={day} style={cellStyles}>
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 24 }).map((_, hour) => (
                <TableRow key={hour}>
                  {Array.from({ length: 7 }).map((_, day) => (
                    <TableCell key={day} style={cellStyles}></TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCalendar;

// 2. wrap the table in a scrollable container (only for width,)
// 3. use 3 media queries to make the table responsive
