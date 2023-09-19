"use client";
import * as React from "react";
import { Event } from "./service";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export const Reminder = ({event}: {event: Event}) => {

  return (
    <>
      <div className="flex gap-2 text-tb-gold text-sm items-center">
        <AddToCalendarButton
          name={event.title}
          options={['Apple','Google']}
          location="World Wide Web"
          startDate="2023-09-21"
          endDate="2023-09-21"
          startTime="10:15"
          endTime="23:30"
          timeZone="America/Los_Angeles"
        ></AddToCalendarButton>
      </div>
    </>
  );
};
