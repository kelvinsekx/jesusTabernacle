'use client'
import * as React from 'react'
import Link from 'next/link'
import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`*[_type =="post" && defined(slug.current)]{
  _id,
  title,
  slug
}`;

export default function Sermons() {
  const [sermons, setSermons] = React.useState<SanityDocument[]>([])
  React.useEffect(()=> {
  const fetchSermons = async ()=> {
    const Sermons = await client.fetch(query);
    setSermons(Sermons)
  }
  fetchSermons()
}, []) 
  return (
    <div className="text-base/[22px] text-tb-grey2">
      {sermons.map((sermon, index)=> <Link key={index} href={sermon.slug.current}>{sermon.title}</Link>)}
    </div>
  );
}
