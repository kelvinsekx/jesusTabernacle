import { Footer } from "@/components/Footer/footer";
import { Navigation } from "../components/Navigation/navigation";
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import Posters from "@/components/Layouts/posters";
import LatestSermo from "@/components/Layouts/latestSermon";

// import { google } from "googleapis";
// import axios from "axios";

// const calendar = google.calendar({
//   version: "v3",
//   auth: "AIzaSyCVI-fQLgCVdwSN2jIvl0TdqWYeyWuRp_k",
// });

export default async function Home() {
  // async function main() {
  //   const res = await calendar.calendarList.list({
  //     maxResults: 10,
  //     timeMin: new Date().toISOString()
  //   });
  //   console.log(res);
  // }
  // main().catch(console.error);
  return (
    <div className="text-base/[22px] text-tb-grey2">
      <Navigation />
      <WelcomeToChurch />
      <Posters />
      <Services />
      <Gallery />
      <LatestSermo />
      <Footer />
    </div>
  );
}
