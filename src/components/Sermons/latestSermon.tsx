import { Container } from "@/components/container";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const LatestSermo = ({ sermons = [] }: { sermons: SanityDocument[] }) => {
  console.log({latestSermon: sermons});
  return (
    <div
      style={{
        backgroundColor: "#FDFAF7",
      }}
    >
      <Container pad>
        <div className="m-auto text-center w-[50%]">
          <div className="text-4.5xl text-tb-black pb-2">Latest Sermon</div>
          <p className="text-base pb-9" id="gallery">
            Timeless truths from the altar by our senior pastor - Pastor Patrick
            Mejeidu. Read great biblical insights and inspirational messages
            that is sure to transform your life.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-y-4 justify-between">
          {sermons.map((sermon, index) => (
            <Link
              key={index}
              href={sermon.slug.current}
              className="border-2 border-tb-grey6 w-[40%] p-4"
            >
              <p className="font-medium text-lg">{sermon.title}</p>
              <small className="text-tb-grey3">Date: 28/08/23</small>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestSermo;
