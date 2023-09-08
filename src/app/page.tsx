
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import { LocateUs } from "@/components/LocateUs/locateus";

import WorshipLive from "@/components/worshipLive";
import Posters from "@/components/Layouts/posters";
import Carousel from '@/components/Layouts/carousel'
import LatestSermo from "@/components/Sermons/latestSermon";

export default async function Home() {
  return (
    <div className="text-base/[22px] text-tb-grey2">
      <Carousel />
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
