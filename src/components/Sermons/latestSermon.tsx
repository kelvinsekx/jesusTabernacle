"use client";
import * as React from "react";
import { Container } from "@/components/container";
import { ListSermon } from "../ListSermon/listSermon";


import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";

const query = groq`*[_type =="post" && defined(slug.current)][0...4]{
  _id,
  title,
  slug,
  body,
  publishedAt
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
    >
      <Container pad>
        <Section>
          <Header>Latest Sermon</Header>
          <Description>
            Timeless truths from the altar by our senior pastor - Pastor Godwill
            Samari. Read great biblical insights and inspirational messages that
            is sure to transform your life.
          </Description>
        </Section>
        {sermons.length < 1 ? <div className='text-center font-bold'>No recent sermon yet...</div> : <ListSermon sermons={sermons} />}
      </Container>
    </div>
  );
};

export default LatestSermo;
