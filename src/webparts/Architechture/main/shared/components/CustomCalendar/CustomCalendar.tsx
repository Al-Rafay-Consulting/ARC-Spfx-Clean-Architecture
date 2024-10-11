import * as React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import CustomToolbar from "./CustomToolbar";

interface Event {
  title: string;
  desc: string;
  start: Date;
  end: Date;
  status: "In Progress" | "Canceled" | "Not Started";
}

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CustomEvent: React.FC<{ event: Event }> = ({ event }): JSX.Element => {
  const statusColors: { [key in Event['status']]: string } = {
    "In Progress": "#a855f7",
    Canceled: "#16a34a",
    "Not Started": "#f97316",
  };

  const borderColor = statusColors[event.status] || "#ccc";

  return (
    <div
      style={{
        borderTop: `5px solid ${borderColor}`,
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "10px",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            backgroundColor: borderColor,
            color: "#fff",
            padding: "2px 6px",
            borderRadius: "5px",
            fontSize: "12px",
          }}
        >
          {event.status}
        </span>
        <span style={{ fontSize: "12px", color: "#666" }}>
          {event.start.toLocaleDateString()} - {event.end.toLocaleDateString()}
        </span>
      </div>
      <strong>{event.title}</strong>
      <p>{event.desc}</p>
    </div>
  );
};

const events: Event[] = [
  {
    title: "Smith vs. Greenfield - 2024-RE-00123",
    desc: "John Smith is suing Greenfield Realty for breach of contract.",
    start: new Date(2024, 9, 8, 7, 0),
    end: new Date(2024, 9, 9, 9, 0),
    status: "In Progress",
  },
  {
    title: "Johnson vs. Riverstone - 2024-RE-00156",
    desc: "Sarah Johnson filed a lawsuit against Riverstone Development.",
    start: new Date(2024, 9, 9, 10, 0),
    end: new Date(2024, 9, 10, 12, 0),
    status: "Canceled",
  },
  {
    title: "Lopez vs. Cityview - 2024-RE-00234",
    desc: "Carlos Lopez challenges the compensation offered by Cityview Holdings.",
    start: new Date(2024, 9, 10, 13, 0),
    end: new Date(2024, 9, 11, 14, 0),
    status: "Not Started",
  },
];

const CustomCalendar: React.FC = (): JSX.Element => {
  return (
    <div style={{ height: "700px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default CustomCalendar;
