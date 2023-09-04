import * as React from "react";
import {getUpComingEvents} from "@/components/getUpComingEvents"

import { Container } from "../container";
import { convertDateString } from "../utils/util";

import { Reminder } from "./reminder";

type TEvent = {
  "id": string,
  "status": string,
  "htmlLink": string,
  "created": Date,
  "updated": Date,
  "summary": string,
  "description": string,
  "location": string,
  "colorId": string,
  "start": {
    "date": Date,
    "dateTime": Date,
    "timeZone": string
  },
  "end": {
    "date": string,
    "dateTime": Date,
    "timeZone": string
  },
  "recurringEventId": string,
  "transparency": string,
  "visibility": string,
  "iCalUID": string,
  "hangoutLink": string,
  
  "source": {
    "url": string,
    "title": string
  },
  "eventType": string
}

export const Services = async () => {
  let events = await getUpComingEvents()
  events = events || []
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
          {(events.length < 1 ) ? (
            <p>No Recent Events</p>
          ) : (
            events.map((event, index) => {
              const [day, month, time] = convertDateString(
                (event?.start?.dateTime as string)
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
