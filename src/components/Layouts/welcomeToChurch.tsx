import Image from "next/image";
import { Container } from "../container";

const WTC = () => {
  return (
    <Container pad>
      <div className="flex justify-between">
        <WTC.ImgGrid />
        <WTC.Content />
      </div>
    </Container>
  );
};

const ImageGrid = () => (
  <div className="flex w-2/4 h-[30rem] gap-4">
    <div className="w-1/2 relative h-full">
      <Image
        fill
        alt=""
        src={"/welcome1.jpg"}
        className="object-fit object-bottom rounded"
      />
    </div>
    <div className="h-full w-1/2 gap-4 flex flex-col">
      <div className="w-full relative h-1/2">
        <Image
          fill
          alt=""
          src={"/welcome2.jpg"}
          className="object-fit rounded"
        />
      </div>
      <div className="w-full relative h-1/2">
        <Image
          fill
          alt=""
          src={"/welcome3.jpg"}
          className="object-fit rounded"
        />
      </div>
    </div>
  </div>
);
WTC.ImgGrid = ImageGrid;

const Content = () => (
  <section className="w-2/5 flex flex-col gap-4">
    <header className="text-4.5xl py-2 text-tb-black">Welcome to church</header>
    <p>
      Welcome to Jesus Tabernacle, a vibrant community of believers who are
      passionate about growing in faith and making a positive impact in our
      world. We invite you to learn more about who we are, what we believe, and
      how you can be a part of our journey.
    </p>
    <p>
      Our Mission: At Jesus Tabernacle, our mission is to briefly describe your
      church's main mission or purpose, such as fostering spiritual growth,
      community engagement, or spreading love and compassion.
    </p>
    <p>
      Our Beliefs: We are a erer-affiliated church that embraces the core tenets
      of the Christian faith. We believe in highlight some key beliefs, such as
      the divinity of Jesus, salvation through grace, etc.
    </p>
  </section>
);
WTC.Content = Content;

export default WTC;
