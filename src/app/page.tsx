import { Footer } from "@/components/Footer/footer";
import { Navigation } from "../components/Navigation/navigation";
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import Posters from "@/components/Layouts/posters";
import LatestSermo from "@/components/Sermons/latestSermon";

import { SanityDocument } from "next-sanity";
import { postsQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/sanityFetch";

export default async function Home() {
  const sermons = await sanityFetch<SanityDocument[]>({ query: postsQuery });  
  return (
    <div className="text-base/[22px] text-tb-grey2">
      <Navigation />
      <WelcomeToChurch />
      <Posters />
      <Services />
      <Gallery />
      <LatestSermo sermons={sermons} />
      <Footer />
    </div>
  );
}
