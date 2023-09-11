import MainBanner from '@/components/Layouts/banner'
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import Posters from "@/components/Layouts/posters";
import WorshipLive from "@/components/worshipLive";
import { Gallery } from "@/components/Gallery/gallery";
 import { Services } from "@/components/Services/service";
 import LatestSermo from "@/components/Sermons/latestSermon";
import { LocateUs } from "@/components/LocateUs/locateus";

export default async function Home() {
  return (
    <div>
      <MainBanner />
      <WelcomeToChurch />
      <Posters />
      {/* <WorshipLive /> 
      <Gallery />  
      <Services />  */}
      <LatestSermo />
      <LocateUs />
    </div>
  );
}
