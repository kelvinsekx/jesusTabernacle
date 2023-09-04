// ./nextjs-app/app/[slug]/page.tsx
'use client'
import Sermon from "@/components/Sermons/sermon";

import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";


const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  body
}`;


export default async function Page({ params }: { params: any }) {
  const queryParams = { slug: params?.slug ?? `` };
  const sermon = await client.fetch(postQuery, queryParams );
  console.log({sermonSlug: sermon})
  return <Sermon sermon={sermon} />;
}
