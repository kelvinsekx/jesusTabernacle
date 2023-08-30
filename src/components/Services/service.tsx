import { Clock, Divide } from "lucide-react";
import { Container } from "../container";

export const Services = () => {
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
        <div className="flex gap-4">
          {events.map((event, index) => (
            <div className="40rem flex flex-col items-center" key={index}>
              <div className="text-2xl font-semibold pb-6">{event.day}</div>
              <div className="text-2xl pb-1 text-center">{event.summary}</div>
              <div className="text-base">{event.timeStartAndEnd}</div>
              <div className="flex gap-2 text-tb-gold text-sm">
                <Clock /> <span>Set Reminder</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const events = [
  {
    day: "Sunday",
    summary: "lorem ipsum help diffe",
    timeStartAndEnd: "8am - 4am",
  },
  {
    day: "Monday",
    summary: "lorem ipsum help diffe",
    timeStartAndEnd: "5am - 4am",
  },
  {
    day: "Wednesday",
    summary: "lorem ipsum help diffe",
    timeStartAndEnd: "8am - 4am",
  },
  {
    day: "LoveDay",
    summary: "lorem ipsum help diffe",
    timeStartAndEnd: "8pm - 4am",
  },
  {
    day: "Tuesday",
    summary: "lorem ipsum help diffe",
    timeStartAndEnd: "8am - 4am",
  },
];
