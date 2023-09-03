import * as React from "react";

import { Container } from "../container";
import { convertDateString } from "../utils/util";

import { Reminder } from "./reminder";

// GOOGLE CALENDER
import { google } from "googleapis";

const CREDENTIALS = JSON.parse(
  process.env.NEXT_PUBLIC_CALENDAR_CREDENTIALS as string
);
const calendarId = process.env.NEXT_PUBLIC_CALENDAR_ID;

const SCOPES = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar({
  version: "v3",
});

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

export const Services = async () => {
  let events = [];
  try {
    const res = await calendar.events.list({
      auth,
      calendarId,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });
    if (res["status"] == 200) {
      const option = res.data.items && res.data.items[0];
      events = res.data.items;
    } else {
      console.log("hell");
    }
  } catch (err) {
    console.log({ eventlisterr: err });
  }

  return (
    <div
      style={{
        backgroundColor: "#428fbb",
        backgroundImage:
          "linear-gradient(147deg, #428fbb 0%, #1a1292 37%, #541151 100%)",
      }}
    >
      <Container pad className="text-white">
        <div className="m-auto text-center w-[50%]">
          <div className="text-4.5xl text-white pb-2">Our Services</div>
          <p className="text-base pb-9" id="gallery">
            We hold services on Sundays, Tuesdays, Wednesdays, Thursday and
            Friday. They are designed to help different aspects of our life
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          {events.length < 1 ? (
            <p>No Recent Events</p>
          ) : (
            events.map((event, index) => {
              const [day, month, time] = convertDateString(
                event?.start?.dateTime
              );
              return (
                <div className="40rem flex flex-col items-center" key={index}>
                  <div className="text-2xl font-semibold pb-6">{day}</div>
                  <div className="text-2xl pb-1 text-center">
                    {event.summary}
                  </div>
                  <div className="text-base">{month}</div>
                  <Reminder event={event} />
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};
