import React, { useEffect } from "react";
import cookies from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export default async function App() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = supabase.from("events").select();
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <p>Events</p>
      <ul>
        {data.map((event) => (
          <li key={event.id}>{event}</li>
        ))}
      </ul>
    </div>
  );
}
