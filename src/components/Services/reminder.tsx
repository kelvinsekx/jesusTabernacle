"use client";
import { Clock } from "lucide-react";
import Header from "next/head";
// import ApiCalendar from "react-google-calendar-api";: REMEMBER TO UNINSTALL

export const Reminder = () => {
  const CLIENT_ID =
    "947596456619-84u73etsmak436186m2cblbi2n41jshd.apps.googleusercontent.com";
  const API_KEY = "<YOUR_API_KEY>";

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  // async function initializeGapiClient() {
  //         await gapi.client.init({
  //           apiKey: API_KEY,
  //           discoveryDocs: [DISCOVERY_DOC],
  //         });
  //         gapiInited = true;
  //       }

  //       /**
  //        * Callback after Google Identity Services are loaded.
  //        */
  //       function gisLoaded() {
  //         tokenClient = google.accounts.oauth2.initTokenClient({
  //           client_id: CLIENT_ID,
  //           scope: SCOPES,
  //           callback: '', // defined later
  //         });
  //         gisInited = true;
  //       }
  console.log({ gapi: window.gapi, name: "sekx" });
  var event = {
    summary: "Google I/O 2015",
    location: "800 Howard St., San Francisco, CA 94103",
    description: "A chance to hear more about Google's developer products.",
    start: {
      dateTime: "2015-05-28T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2015-05-28T17:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  const handleReminder = async () => {};
  return (
    <>
      <Header>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}
        />
      </Header>
      <div onClick={handleReminder} className="flex gap-2 text-tb-gold text-sm">
        <Clock /> <span>Set Reminder</span>
      </div>
    </>
  );
};
