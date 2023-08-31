import { Footer } from "@/components/Footer/footer";
import { Navigation } from "../components/Navigation/navigation";
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import Posters from "@/components/Layouts/posters";
import LatestSermo from "@/components/Layouts/latestSermon";

export default async function Home() {
  
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
