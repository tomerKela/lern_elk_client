import React, { FC, useState } from "react";
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  Switch,
  Typography,
} from "@mui/material";
import { Chat as ChatIcon, Call as CallIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface CalendarProps {
  showTopBar?: boolean;
  showActionButtons?: boolean;
}

export const Calendar: FC<CalendarProps> = ({
  showTopBar = true,
  showActionButtons = true,
}) => {
  const [show24Hours, setShow24Hours] = useState(false);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      setAlertMessage(`New event "${title}" added successfully!`);
      setShowAlert(true);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setAlertMessage(
      `Event: ${clickInfo.event.title} at ${formatDate(clickInfo.event.start!, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}`
    );
    setShowAlert(true);
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  const handleGoToChat = () => {
    navigate("/chat");
  };

  const handleCallNow = () => {
    navigate("/mock-call");
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "1rem", flexGrow: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              style={{ fontWeight: "bold", color: "#1f2937" }}
            >
              Event Calendar
            </Typography>
            {showTopBar && (
              <TopBar
                show24Hours={show24Hours}
                setShow24Hours={setShow24Hours}
                showActionButtons={showActionButtons}
                onGoToChat={handleGoToChat}
                onCallNow={handleCallNow}
              />
            )}
          </div>
          {showAlert && (
            <Alert
              severity="info"
              style={{ marginBottom: "1rem" }}
              action={
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => setShowAlert(false)}
                >
                  CLOSE
                </Button>
              }
            >
              <AlertTitle>Info</AlertTitle>
              {alertMessage}
            </Alert>
          )}
          <Card elevation={0} style={{ backgroundColor: "transparent" }}>
            <CardContent>
              <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "",
                  right: "timeGridWeek",
                }}
                initialView="timeGridWeek"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialEvents={INITIAL_EVENTS}
                select={handleDateSelect}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                eventsSet={handleEvents}
                height="auto"
                allDaySlot={false}
                slotMinTime={show24Hours ? "00:00:00" : "07:00:00"}
                slotMaxTime={show24Hours ? "24:00:00" : "22:00:00"}
                views={{
                  timeGridWeek: {
                    titleFormat: {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const renderEventContent = (eventInfo: EventContentArg) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
        backgroundColor: "#3b82f6",
        color: "white",
        borderRadius: "0.25rem",
      }}
    >
      <span
        style={{
          fontSize: "0.875rem",
          fontWeight: "500",
          marginRight: "0.25rem",
        }}
      >
        {eventInfo.timeText}
      </span>
      <span style={{ fontSize: "0.875rem", marginLeft: "0.25rem" }}>
        {eventInfo.event.title}
      </span>
    </div>
  );
};

interface TopBarProps {
  show24Hours: boolean;
  setShow24Hours: (value: boolean) => void;
  showActionButtons: boolean;
  onGoToChat: () => void;
  onCallNow: () => void;
}

const TopBar: FC<TopBarProps> = ({
  show24Hours,
  setShow24Hours,
  showActionButtons,
  onGoToChat,
  onCallNow,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "50%",
        justifyContent: "end",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch
          checked={show24Hours}
          onChange={(e) => setShow24Hours(e.target.checked)}
          size="small"
        />
        <span style={{ marginLeft: "8px", fontSize: "0.875rem" }}>24h</span>
      </div>
      {showActionButtons && (
        <>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              variant="contained"
              onClick={onGoToChat}
              startIcon={<ChatIcon />}
            >
              Go to Chat
            </Button>
            <Button
              variant="contained"
              onClick={onCallNow}
              startIcon={<CallIcon />}
            >
              Call Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
