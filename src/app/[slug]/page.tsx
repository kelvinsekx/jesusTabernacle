// ./nextjs-app/app/[slug]/page.tsx

import Sermon from "@/components/Sermons/sermon";

import { groq } from "next-sanity";
import type { SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { sanityFetch } from "@/lib/sanityFetch";

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  body
}`;

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here

  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
const sermon = await sanityFetch<SanityDocument>({ query: postQuery, params });
  console.log({sermonSlug: sermon})
  return <Sermon sermon={sermon} />;
}
