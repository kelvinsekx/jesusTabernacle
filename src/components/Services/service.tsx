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
        <div className="w-full flex flex-col items-center">
          <div>
            {events.length < 1 ? (
              <p>No Recent Events</p>
            ) : (
              <div className="flex flex-col items-start w-fit">
                <div className="flex gap-16">
                  <div>
                    <Monday />
                    <Tuesday />
                  </div>
                  <Wednesday />
                  <Friday />
                  <Sunday />
                </div>
                <Tuesday />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Monday = () => (
  <>
    <div className="mb-10 flex gap-2 flex-col items-center relative">
      <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">
        MONDAY
      </div>
      <div className="text-lg md:text-xl pb-1 text-center">Fresh Anointing</div>
      <div className="text-xs">9am - 10pm (prayer line)</div>
      <Reminder event={{
        day: 'Monday',
        title: 'Fresh Annointing',
        time: '9am - 10pm'
      }} />
    </div>
  </>
);

const Tuesday = () => (
  <>
    <div className="mb-10 flex gap-2 flex-col items-center relative">
      <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">
        TUESDAY
      </div>
      <div className="text-lg md:text-xl pb-1 text-center">Noon Prayers</div>
      <div className="text-xs">12pm - 12:30pm (prayer line)</div>
      <Reminder
        event={{
          day: "Tuesday",
          title: "Noon Prayers",
          time: "12pm - 12:30pm (prayer line)",
        }}
      />
    </div>
  </>
);


const Wednesday = () => (
  <>
    <div className="mb-10 flex gap-2 flex-col items-center relative">
      <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">
        Wednesday
      </div>
      <div className="flex flex-col gap-6">
        <div className="">
          <div className="text-lg md:text-xl pb-1 text-center">
            Noon Prayers
          </div>
          <div className="text-xs">12pm - 12:30pm (prayer line)</div>
          <Reminder
            event={{
              day: "Wednesday",
              title: "Noon Prayers",
              time: "12pm - 12:30pm (prayer line)",
            }}
          />
        </div>
        <div>
          <div className="text-lg md:text-xl pb-1 text-center">Bible Study</div>
          <div className="text-xs">7pm - 8:30pm (Church Auditorium)</div>
          <Reminder
            event={{
              day: "Wednesday",
              title: "Noon Prayers",
              time: "7pm - 8:30pm (Church Auditorium)",
            }}
          />
        </div>
      </div>
    </div>
  </>
);

const Friday = () => (
  <>
    <div className="mb-10 flex gap-2 flex-col items-center relative">
      <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">
        FRIDAY
      </div>
      <div className="flex flex-col gap-6">
        <div className="">
          <div className="text-lg md:text-xl pb-1 text-center">
            Noon Prayers
          </div>
          <div className="text-xs">12pm - 12:30pm (prayer line)</div>
          <Reminder
            event={{
              day: "Friday",
              title: "Noon Prayers",
              time: "12pm - 12:30pm (prayer line)",
            }}
          />
        </div>
        <div>
          <div className="text-lg md:text-xl pb-1 text-center">
            Overcomers night
          </div>
          <div className="text-xs">10:30pm - 2:30am (Last Friday of the Month)</div>
          <Reminder
            event={{
              day: "Friday",
              title: "Noon Prayers",
              time: "7pm - 8:30pm (Church Auditorium)",
            }}
          />
        </div>
      </div>
    </div>
  </>
);

const Sunday = () => (
  <>
    <div className="mb-10 flex gap-2 flex-col items-center relative">
      <div className="text-xl md:text-2xl font-semibold pb-2 md:pb-5">
        SUNDAY
      </div>
      <div className="flex flex-col gap-6">
        <div className="">
          <div className="text-lg md:text-xl pb-1 text-center">
            Sunday School
          </div>
          <div className="text-xs">12pm - 12:30pm (prayer line)</div>
          <Reminder
            event={{
              day: "Friday",
              title: "Noon Prayers",
              time: "12pm - 12:30pm (prayer line)",
            }}
          />
        </div>
        <div>
          <div className="text-lg md:text-xl pb-1 text-center">
            Celebration Service
          </div>
          <div className="text-xs">
            10:30pm - 2:30am (Last Friday of the Month)
          </div>
          <Reminder
            event={{
              day: "Friday",
              title: "Noon Prayers",
              time: "7pm - 8:30pm (Church Auditorium)",
            }}
          />
        </div>
        <div>
          <div className="text-lg md:text-xl pb-1 text-center">
            Power Service
          </div>
          <div className="text-xs">
            10:30pm - 2:30am (Last Friday of the Month)
          </div>
          <Reminder
            event={{
              day: "Friday",
              title: "Noon Prayers",
              time: "7pm - 8:30pm (Church Auditorium)",
            }}
          />
        </div>
      </div>
    </div>
  </>
);

