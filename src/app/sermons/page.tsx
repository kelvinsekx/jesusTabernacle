import { Footer } from "@/components/Footer/footer";
import { Navigation } from "../components/Navigation/navigation";
import { Gallery } from "@/components/Gallery/gallery";
import { Services } from "@/components/Services/service";
import WelcomeToChurch from "@/components/Layouts/welcomeToChurch";
import { LocateUs } from "@/components/LocateUs/locateus";

import WorshipLive from "@/components/worshipLive";
import Posters from "@/components/Layouts/posters";
import LatestSermo from "@/components/Sermons/latestSermon";

import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`*[_type =="post" && defined(slug.current)]{
  _id,
  title,
  slug
}`;

export default async function Home() {
  const sermons = await client.fetch(query);
  console.log(sermons);
  return (
    <div className="text-base/[22px] text-tb-grey2">
      {sermons.map((sermon, index) => (
        <Link key={index} href={sermon.slug.current}>
          {sermon.title}
        </Link>
      ))}
    </div>
  );
}
