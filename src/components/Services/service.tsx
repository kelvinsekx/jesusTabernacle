import * as React from "react";

import { Container } from "../container";

import { Reminder } from "./reminder";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";

export type Event = {
  day: string,
  title: string,
  time: string
}
const events = [
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'TUESDAY',
    title: 'Noon Prayers',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'WEDNESDAY',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'THURSDAY',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'FRIDAY',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'SUNDAY',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
]

export const Services = async () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(0, 47, 85)",
        backgroundImage:
          "linear-gradient(147deg, rgb(0, 47, 85) 0%, rgb(4, 22, 42) 37%, rgb(57, 19, 51) 100%)",
      }}
    >
      <Container pad className="text-white flex flex-col items-center">
        <Section>
          <Header className="text-white">Our Services</Header>
          <Description className="text-white">
            We hold services on Sundays, Tuesdays, Wednesdays, Thursday and
            Friday. They are designed to help different aspects of our life
          </Description>
        </Section>
        <div className="w-full">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {(events.length < 1 ) ? (
            <p>No Recent Events</p>
          ) : (
            events.map((event, index) => {
              return (
                <div className="mb-10 flex gap-2 flex-col items-center relative" key={index}>
                  <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">{event.day.toUpperCase()}</div>
                  <div className="text-lg md:text-xl pb-1 text-center">
                    {event.title}
                  </div>
                  <div className="text-xs">{event.time}</div>
                  <Reminder event={event} />
                </div>
              );
            })
          )}
        </div>
        </div>
      </Container>
    </div>
  );
};

