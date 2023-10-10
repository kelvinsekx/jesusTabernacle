import { Banner, WelcomeToChurch, Posters } from "@/components/Layouts";
import WorshipLive from "@/components/worshipLive";
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import LatestSermo from "@/components/Sermons/latestSermon";
import { LocateUs } from "@/components/LocateUs/locateus";

export default async function Home() {
  return (
    <div>
      <Banner />
      <WelcomeToChurch />
      <Posters />
      <WorshipLive /> 
      <Gallery />  
      <Services /> 
      <LatestSermo />
      <LocateUs />
    </div>
  );
}
