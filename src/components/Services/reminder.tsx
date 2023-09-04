"use client";
import * as React from "react";
import { Clock } from "lucide-react";
// import ApiCalendar from "react-google-calendar-api";: REMEMBER TO UNINSTALL

export const Reminder = ({event}: {event: any}) => {
  const [tokenClient, setTokenClient] = React.useState();
  const CLIENT_ID =
    "947596456619-84u73etsmak436186m2cblbi2n41jshd.apps.googleusercontent.com";
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  React.useEffect(() => {
    async function initializeGapiClient() {
      await (window as any).gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
    }

    function gapiLoaded() {
      (window as any).gapi.load("client", initializeGapiClient);
    }

    // embed gapi script
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = gapiLoaded;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // second useEffect

  React.useEffect(() => {
    let tokenClient:any;
    let gisInited = false;
    /**
     * Callback after Google Identity Services are loaded.
     */
    function gisLoaded() {
      tokenClient = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "", // defined later
      });
      gisInited = true;
      setTokenClient(tokenClient);
    }

    // embed google signin script
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = gisLoaded;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  /**
   *  Sign in the user upon button click.
   */
  function handleAuth() {
    (tokenClient as any).callback = async (resp: {error: any}) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      // document.getElementById("signout_button").style.visibility = "visible";
      // document.getElementById("authorize_button").innerText = "Refresh";
      await insert();
    };

    if ((window as any).gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }
  }

  async function insert() {

    await (window as any).gapi.client.calendar.events.insert(
      {
        calendarId: "primary",
        resource: event,
      },
      function (err, event) {
        if (err) {
          console.log(
            "There was an error contacting the Calendar service: " + err
          );
          return;
        }
        console.log("Event created: %s", event.htmlLink);
      }
    );
  }

  
  const handleReminder = async () => {
    handleAuth();
  };
  return (
    <>
      <div onClick={handleReminder} className="flex gap-2 text-tb-gold text-sm">
        <Clock /> <span>Set Reminder</span>
      </div>
    </>
  );
};
