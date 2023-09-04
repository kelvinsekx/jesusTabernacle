// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../lib/sanity.client";

const builder = imageUrlBuilder(client);

export default function Post({ sermon }: { sermon: SanityDocument }) {
  return (
    <main className="max-w-4xl mx-auto prose prose-lg p-4">
      <h1 className='text-5xl pb-4 md:pb-8 font-black'>{sermon.title}</h1>
      {sermon?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(sermon.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={sermon?.mainImage?.alt}
        />
      ) : null}
      {sermon?.body ? <PortableText value={sermon.body} /> : null}
    </main>
  );
}
