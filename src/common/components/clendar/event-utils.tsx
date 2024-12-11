let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
const tomorrowStr = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of tommorow
const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of two days from now
const threeDaysFromNow = new Date(
  new Date().getTime() + 3 * 24 * 60 * 60 * 1000
)
  .toISOString()
  .replace(/T.*$/, ""); // YYYY-MM-DD of three days from now

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Event 1",
    start: todayStr + "T16:30:00",
    end: todayStr + "T17:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: todayStr + "T17:00:00",
    end: todayStr + "T17:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: todayStr + "T17:30:00",
    end: todayStr + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: todayStr + "T18:00:00",
    end: todayStr + "T18:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: todayStr + "T18:30:00",
    end: todayStr + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: tomorrowStr + "T16:30:00",
    end: tomorrowStr + "T17:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: tomorrowStr + "T17:00:00",
    end: tomorrowStr + "T17:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: tomorrowStr + "T17:30:00",
    end: tomorrowStr + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: tomorrowStr + "T18:00:00",
    end: tomorrowStr + "T18:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: tomorrowStr + "T18:30:00",
    end: tomorrowStr + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: threeDaysFromNow + "T16:30:00",
    end: threeDaysFromNow + "T17:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: threeDaysFromNow + "T17:00:00",
    end: threeDaysFromNow + "T17:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: threeDaysFromNow + "T17:30:00",
    end: threeDaysFromNow + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: threeDaysFromNow + "T18:00:00",
    end: threeDaysFromNow + "T18:30:00",
  },
  {
    id: createEventId(),
    title: "Event 2",
    start: threeDaysFromNow + "T18:30:00",
    end: threeDaysFromNow + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Morning Block 1",
    start: threeDaysFromNow + "T09:00:00",
    end: threeDaysFromNow + "T09:30:00",
  },
  {
    id: createEventId(),
    title: "Morning Block 2",
    start: threeDaysFromNow + "T09:30:00",
    end: threeDaysFromNow + "T10:00:00",
  },
  {
    id: createEventId(),
    title: "Morning Block 3",
    start: threeDaysFromNow + "T10:00:00",
    end: threeDaysFromNow + "T10:30:00",
  },
  {
    id: createEventId(),
    title: "Morning Block 1",
    start: threeDaysFromNow + "T10:30:00",
    end: threeDaysFromNow + "T11:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
