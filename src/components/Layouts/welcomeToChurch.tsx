import Image from "next/image";
import { LargeContainer } from "../container";
import { Header } from "../Header/header";

const WTC = () => {
  return (
    <LargeContainer pad className="px-2 md:px-4">
      <div className="flex justify-between">
        <WTC.ImgGrid />
        <WTC.Content />
      </div>
    </LargeContainer>
  );
};

const ImageGrid = () => (
  <div className="flex w-2/4 h-[22rem] lg:h-[30rem] xl:h-[35rem] gap-4 max-md:hidden">
    <div className="w-1/2 relative h-full overflow-hidden">
      <Image
        fill
        alt=""
        src={
          "https://res.cloudinary.com/joi-de-vivro/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1694633896/members_of_Jesus_tabernacle_having_a_fun_time_bnjolw"
        }
        className="object-cover rounded"
      />
    </div>
    <div className="h-full w-1/2 gap-4 flex flex-col">
      <div className="w-full relative h-1/2">
        <Image
          fill
          alt=""
          src={
            "https://res.cloudinary.com/joi-de-vivro/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1694633896/pastor_samari_and_first_lady_turdlo"
          }
          className="object-cover rounded"
        />
      </div>
      <div className="w-full relative h-1/2 overflow-hidden">
        <Image
          fill
          alt=""
          src={
            "https://res.cloudinary.com/joi-de-vivro/image/upload/v1696143063/samples/jesus_tabernacle_church_congregation_zf9cn5"
          }
          className="object-cover rounded"
        />
      </div>
    </div>
  </div>
);
WTC.ImgGrid = ImageGrid;

const Content = () => (
  <section className="w-full md:w-2/5 flex flex-col gap-2">
    <Header>Welcome to Church</Header>
    <p>
      {`Jesus Tabernacle Durham is a mission branch of the Redeemed Christian Church of God, North America with a vision to preach God's Word to the ends of the earth. We are a diverse, close-knit, and inclusive community that places a great emphasis on love and family values.`}
    </p>
    <p>
      {`Our church is firmly rooted in our faith in the Bible, both in belief and practice. Also, our teachings and missionary efforts are dedicated to promoting righteous conduct and moral integrity among various geographical regions, different life stages, and varying levels of spiritual growth, emphasizing the pursuit of holiness in our lives.`}
    </p>
    <p>{`We have strong faith in the power of prayer and that our God answers prayers. This is why our church is known as the "Solution Center" (Psalm 121 vs 1-2).`}</p>
    <p>{`As a church, our primary goal is to make heaven.`}</p>
  </section>
);
WTC.Content = Content;

export default WTC;
