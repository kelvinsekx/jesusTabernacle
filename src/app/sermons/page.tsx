"use client";
import * as React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";

import {Container, LargeContainer} from "@/components/container"
import { client } from "@/lib/sanity.client";

const query = groq`*[_type =="post" && defined(slug.current)]{
  _id,
  title,
  slug
}`;

export default function Sermons() {
  const [sermons, setSermons] = React.useState<SanityDocument[]>([]);
  React.useEffect(() => {
    const fetchSermons = async () => {
      const Sermons = await client.fetch(query);
      setSermons(Sermons);
    };
    fetchSermons();
  }, []);
  return (
    <LargeContainer className="text-base/[22px] text-tb-grey2">
      <Sermons.Banner />
      <Container className="my-8">
        <div className="flex flex-wrap items-center gap-y-4 justify-between">
          {sermons.map((sermon, index) => (
            <Link
            key={index}
            href={sermon.slug.current}
            className="border-2 hover:border-tb-black border-tb-grey6 bg-white w-[40%] p-4"
          >
            <p className="font-medium text-lg">{sermon.title}</p>
            <small className="text-tb-grey3 flex justify-between w-full">
              <span>Date: 28/08/23</span>
              <span>Read more</span>
            </small>
          </Link>
          ))}
        </div>
      </Container>
    </LargeContainer>
  );
}

const Banner = ()=> <div className="text-white text-4.5xl flex items-center justify-center text-bold w-full h-52 bg-[url(/sermon_banner.jpg)]">
  <span>Sermons</span>
</div>
Sermons.Banner = Banner
