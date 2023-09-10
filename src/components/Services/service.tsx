import * as React from "react";
import {getUpComingEvents} from "@/components/getUpComingEvents"

import { Container } from "../container";
import { convertDateString } from "../utils/util";

import { Reminder } from "./reminder";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";
import {Clock} from 'lucide-react'


export const Services = async () => {
  // let events = await getUpComingEvents()
  // events = events || []

  let events = [1,2,3,4,5,6]
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
              // const [day, month, time] = convertDateString(
              //   (event?.start?.dateTime as string)
              // );
              return (
                <div className="w-[60vw] md:w-fit flex gap-2 flex-col items-center" key={index}>
                  <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">MONDAY</div>
                  <div className="text-lg md:text-xl pb-1 text-center">
                    Fresh Anointing
                  </div>
                  <div className="text-xs">12pm - 12:30pm (prayer line)</div>
                  <div className="flex gap-2 text-tb-gold text-sm items-center">
                    <Clock /> <span>Set Reminder</span>
                </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

/**
 * events.map((event, index) => {
              const [day, month, time] = convertDateString(
                (event?.start?.dateTime as string)
              );
 *  <div className="w-[60vw] md:w-fit flex gap-2 flex-col items-center" key={index}>
                  <div className="text-2xl font-semibold pb-6">{day}</div>
                  <div className="text-2xl pb-1 text-center">
                    {event.summary}
                  </div>
                  <div className="text-base">{month}</div>
                  <Reminder event={event} />
                </div>
 */
