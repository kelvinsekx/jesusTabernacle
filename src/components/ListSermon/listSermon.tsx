'use client'
import type { SanityDocument } from "next-sanity";
import Link from 'next/link'

import { getHumaneDate } from "../utils/util";

export const ListSermon = ({sermons}: {sermons:SanityDocument[]})=> <div className="flex flex-col md:flex-row flex-wrap items-center gap-y-4 justify-between">
{sermons.map((sermon, index) => (
  <Link
    key={index}
    href={sermon.slug.current}
    className="border-2 hover:border-tb-black border-tb-grey6 bg-white w-[94%] md:w-[40%] p-2.5 md:p-4"
  >
    <p className="font-medium text-lg">{sermon.title}</p>
    <small className="text-tb-grey3 flex justify-between w-full">
      <span>Date: {getHumaneDate(sermon.publishedAt) || '28/08/23'}</span>
      <span>Read more</span>
    </small>
  </Link>
))}
</div>