"use client";
import * as React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";

import {Container, LargeContainer} from "@/components/container"
import { ListSermon } from "@/components/ListSermon/listSermon";

import { client } from "@/lib/sanity.client";

const query = groq`*[_type =="post" && defined(slug.current)]{
  _id,
  title,
  slug,
  publishedAt
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
        {sermons.length < 1 ? <div className='text-center font-bold'>No recent sermon yet...</div>: <ListSermon sermons={sermons}  />}
      </Container>
    </LargeContainer>
  );
}

const Banner = ()=> <div className="text-white text-4.5xl flex items-center justify-center text-bold w-full h-52 bg-[url(/sermon_banner.jpg)]">
  <span>Sermons</span>
</div>
Sermons.Banner = Banner
