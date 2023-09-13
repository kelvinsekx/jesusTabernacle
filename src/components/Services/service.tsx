import * as React from "react";

import { Container } from "../container";
import { convertDateString } from "../utils/util";

import { Reminder } from "./reminder";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";

const events = [
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'Monday',
    title: 'Fresh Annointing',
    time: '9am - 10pm (prayer line)'
  },
  {
    day: 'Monday',
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
      <Container pad className="text-white">
        <Section>
          <Header className="text-white">Our Services</Header>
          <Description className="text-white">
            We hold services on Sundays, Tuesdays, Wednesdays, Thursday and
            Friday. They are designed to help different aspects of our life
          </Description>
        </Section>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {(events.length < 1 ) ? (
            <p>No Recent Events</p>
          ) : (
            events.map((event, index) => {
              return (
                <div className="w-[60vw] md:w-fit flex gap-2 flex-col items-center" key={index}>
                  <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">{event.time.toUpperCase()}</div>
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
      </Container>
    </div>
  );
};

