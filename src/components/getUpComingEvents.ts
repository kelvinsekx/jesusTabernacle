import { cache } from 'react'

export const revalidate = 3600

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
  null as string,
  CREDENTIALS.private_key,
  SCOPES
);

export const getUpComingEvents = cache(async () => {
    const res = await calendar.events.list({
      auth,
      calendarId,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });
    return res.data.items;
})
