"use client";
import * as React from "react";
import { Container } from "@/components/container";
import { ListSermon } from "../ListSermon/listSermon";
import Link from "next/link";

import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Header } from "../Header/header";
import { Description } from "../Description";

const query = groq`*[_type =="post" && defined(slug.current)][0...4]{
  _id,
  title,
  slug,
  body
}`;

const LatestSermo = () => {
  const [sermons, setSermons] = React.useState<SanityDocument[]>([]);
  React.useEffect(() => {
    const fetchSermons = async () => {
      const Sermons = await client.fetch(query);
      setSermons(Sermons);
    };
    fetchSermons();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FDFAF7",
      }}
    >
      <Container pad>
        <section className="m-auto text-center w-[80%] md:w-[50%]">
          <Header>Latest Sermon</Header>
          <Description>
            Timeless truths from the altar by our senior pastor - Pastor Patrick
            Mejeidu. Read great biblical insights and inspirational messages
            that is sure to transform your life.
          </Description>
        </section>
        <ListSermon sermons={sermons} />
      </Container>
    </div>
  );
};

export default LatestSermo;
